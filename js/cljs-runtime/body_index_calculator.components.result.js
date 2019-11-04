goog.provide('body_index_calculator.components.result');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('body_index_calculator.subscriptions');
goog.require('body_index_calculator.helpers');
var module$node_modules$$material_ui$core$Table$index=shadow.js.require("module$node_modules$$material_ui$core$Table$index", {});
var module$node_modules$$material_ui$core$TableBody$index=shadow.js.require("module$node_modules$$material_ui$core$TableBody$index", {});
var module$node_modules$$material_ui$core$TableCell$index=shadow.js.require("module$node_modules$$material_ui$core$TableCell$index", {});
var module$node_modules$$material_ui$core$TableHead$index=shadow.js.require("module$node_modules$$material_ui$core$TableHead$index", {});
var module$node_modules$$material_ui$core$TableRow$index=shadow.js.require("module$node_modules$$material_ui$core$TableRow$index", {});
body_index_calculator.components.result.cell = (function body_index_calculator$components$result$cell(child){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$TableCell$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"right"], null),child], null);
});
body_index_calculator.components.result.result_table = (function body_index_calculator$components$result$result_table(){
var res = (function (){var G__50110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.subscriptions","result","body-index-calculator.subscriptions/result",-1330365021)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50110) : re_frame.core.subscribe.call(null,G__50110));
})();
return ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Table$index.default,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$TableHead$index.default,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$TableRow$index.default,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.result.cell,"Metric name / Units"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.result.cell,"Value"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.result.cell,"Conclusion"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$TableBody$index.default,(function (){var iter__4523__auto__ = ((function (res){
return (function body_index_calculator$components$result$result_table_$_iter__50116(s__50117){
return (new cljs.core.LazySeq(null,((function (res){
return (function (){
var s__50117__$1 = s__50117;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50117__$1);
if(temp__5735__auto__){
var s__50117__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50117__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50117__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50119 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50118 = (0);
while(true){
if((i__50118 < size__4522__auto__)){
var map__50120 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50118);
var map__50120__$1 = (((((!((map__50120 == null))))?(((((map__50120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50120):map__50120);
var abbr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50120__$1,new cljs.core.Keyword(null,"abbr","abbr",2088591884));
var raw_value_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50120__$1,new cljs.core.Keyword(null,"raw-value?","raw-value?",230729337));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50120__$1,new cljs.core.Keyword(null,"title","title",636505583));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50120__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50120__$1,new cljs.core.Keyword(null,"value","value",305978217));
var conclusion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50120__$1,new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958));
cljs.core.chunk_append(b__50119,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$TableRow$index.default,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.result.cell,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title," (",abbr,") ","/ ",units], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.result.cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(raw_value_QMARK_)?body_index_calculator.helpers.as_float.cljs$core$IFn$_invoke$arity$2(value,(4)):body_index_calculator.helpers.as_int(value))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.result.cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),conclusion], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["table-row",title], 0))], null)));

var G__50166 = (i__50118 + (1));
i__50118 = G__50166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50119),body_index_calculator$components$result$result_table_$_iter__50116(cljs.core.chunk_rest(s__50117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50119),null);
}
} else {
var map__50125 = cljs.core.first(s__50117__$2);
var map__50125__$1 = (((((!((map__50125 == null))))?(((((map__50125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50125):map__50125);
var abbr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"abbr","abbr",2088591884));
var raw_value_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"raw-value?","raw-value?",230729337));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"title","title",636505583));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"value","value",305978217));
var conclusion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"conclusion","conclusion",-1443624958));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$TableRow$index.default,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.result.cell,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title," (",abbr,") ","/ ",units], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.result.cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(raw_value_QMARK_)?body_index_calculator.helpers.as_float.cljs$core$IFn$_invoke$arity$2(value,(4)):body_index_calculator.helpers.as_int(value))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_index_calculator.components.result.cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),conclusion], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),body_index_calculator.helpers.react_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["table-row",title], 0))], null)),body_index_calculator$components$result$result_table_$_iter__50116(cljs.core.rest(s__50117__$2)));
}
} else {
return null;
}
break;
}
});})(res))
,null,null));
});})(res))
;
return iter__4523__auto__(cljs.core.deref(res));
})()], null)], null);
});
;})(res))
});

//# sourceMappingURL=body_index_calculator.components.result.js.map