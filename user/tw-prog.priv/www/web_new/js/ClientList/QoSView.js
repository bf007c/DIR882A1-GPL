/* svn info: $Revision: 847 $ $Date: 2018-06-06 18:37:11 +0800 (Wed, 06 Jun 2018) $ */
define("QoSView",function(){var g=$("#qos_obj").clone(),v=function(t,e){this.name=t,this.DOM=e,this.Live=!0,this.upload=0,this.download=0},t=function(){this.list=new Array};(t.prototype={get length(){return this.list.length}}).prepareUpdate=function(){for(var t in this.list)this.list[t].Live=!1,this.list[t].upload=0,this.list[t].download=0},t.prototype.clean=function(){for(var t in this.list){var e=this.list[t];0==e.Live&&(e.DOM.remove(),this.list.splice(t,1))}},t.prototype.getData=function(t){var e=null;for(var a in this.list){var i=this.list[a];if(i.name==t){e=i;break}}return e},t.prototype.push=function(t){return this.list.push(t),!0};var e=function(){this.DOM,this.categoryList=new t};return e.prototype.generateQoSHTML=function(t){var e=g.clone();return e.children(".QoS_Content").remove(),e.css("display","block"),this.DOM=e,this.DOM},e.prototype.updateHTML=function(t){var e=0,a=0;for(var i in t.AppSummary){var n=t.AppSummary[i];e+=parseInt(n.ULRate),a+=parseInt(n.DLRate)}for(var i in this.DOM.find(".QoS_Speed").children("span[name='uplink']").html(e),this.DOM.find(".QoS_Speed").children("span[name='downlink']").html(a),this.categoryList.prepareUpdate(),t.AppSummary){var r=!0,o="",s="",l=(n=t.AppSummary[i]).Category;switch(l){case"streamming":o="image/StreamingMedia.png",s="Streamming media";break;case"web":o="image/WebSurfing.png",s="Web Surfing";break;case"file":o="image/FileTransfer.png",s="File transfer";break;case"others":o="image/Others (1).png",s="Others";break;case"game":o="image/Games.png",s="Game";break;case"chat":o="image/OnlineChat.png",s="Online Chat";break;default:r=!1}if(r){var p,d=this.categoryList.getData(l);null==d?((p=g.children(".QoS_Content").clone()).css("display","inline-block"),this.DOM.append(p),d=new v(l,p),this.categoryList.push(d)):(p=d.DOM,d.Live=!0),p.children(".QoS_Content_icon").attr("src",o),p.children(".QoS_Content_name").html(s);var h=parseInt(n.ULRate),c=parseInt(n.DLRate);d.upload+=h,d.download+=c;var u=d.upload/e*100,m=d.download/a*100,f=p.children(".QoS_Content_bar");f.find("div[name='upload_bar']").css("width",u+"%").attr("aria-valuenow",u).html(d.upload),f.find("div[name='download_bar']").css("width",m+"%").attr("aria-valuenow",m).html(d.download)}}this.categoryList.clean(),this.updateDetail(t.AppSummary)},e.prototype.updateDetail=function(t){var e=$("#qosPop_table_body");for(var a in e.empty(),t){var i=t[a],n='<tr><td style="width:30%">'+i.Category+'</td><td style="width:40%">'+i.Application+'</td><td style="width:15%">'+i.ULRate+'</td><td style="width:15%">'+i.DLRate+"</td></tr>";e.append(n)}},$("#closeQoSPopBtn").off("click").click(function(){$("#qosPop").hide(),$("body").css("overflow","auto")}),e});