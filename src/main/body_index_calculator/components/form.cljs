(ns body-index-calculator.components.form
  (:require
   [re-frame.core :as rf]
   [body-index-calculator.subscriptions :as s]
   [body-index-calculator.helpers :refer [->int]]
   [body-index-calculator.events :as e]
   [body-index-calculator.components.radio-group :refer [radio-group]]
   [body-index-calculator.components.input  :refer [input]]))

(defn gender []
  (let [value (rf/subscribe [::s/gender])]
    (fn []
      [radio-group
       {:value         (or @value "")
        :label         "Gender"
        :radio-buttons [{:label "Female" :value "female"}
                        {:label "Male" :value "male"}]
        :on-change     #(rf/dispatch
                         [::e/gender
                          {:visited? true
                           :value    (keyword %)}])}])))

(defn input-with-subscription [{:keys [sub-key ev-key label units]}]
  (let [value (rf/subscribe [sub-key])]
    (fn []
      [input
       {:label     label
        :value     (or @value "")
        :units     units
        :on-change #(rf/dispatch
                     [ev-key {:value (->int %)}])
        :on-focus  #(rf/dispatch
                     [ev-key {:visited? true :active? true}])
        :on-blur   #(rf/dispatch
                     [ev-key {:active? false}])}])))

(defn age []
  [input-with-subscription
   {:label   "Age"
    :sub-key ::s/age
    :ev-key  ::e/age
    :units   "Years"}])

(defn weight []
  [input-with-subscription
   {:label   "Weight"
    :sub-key ::s/weight
    :ev-key  ::e/weight
    :units   "Kg"}])

(defn height []
  [input-with-subscription
   {:label   "Height"
    :sub-key ::s/height
    :ev-key  ::e/height
    :units   "Sm"}])

(defn waist []
  [input-with-subscription
   {:label   "Waist Circumference"
    :sub-key ::s/waist
    :ev-key  ::e/waist
    :units   "Sm"}])

(defn form []
  [:form {:name          "index-calculator"
          :no-validate   true
          :auto-complete "off"}
   [gender]
   [age]
   [weight]
   [height]
   [waist]])
