
toolsContainer=$(".tool-container")
manubox= $(".manu-box")
edit= $(".edit"); 
srch=$(".search");
basmaps=$(".basemaps");
lgnd=$(".legend")
meaure=$(".measure")


require(["esri/request","esri/widgets/Editor","esri/widgets/AreaMeasurement2D",
"esri/widgets/DistanceMeasurement2D","esri/layers/BingMapsLayer","esri/widgets/ScaleBar",
"esri/widgets/Expand","esri/Map", "esri/views/MapView","esri/widgets/BasemapGallery",
"esri/layers/FeatureLayer","esri/widgets/Legend","esri/widgets/Search",
"esri/widgets/Locate","esri/widgets/Home"], 
		function(esriRequest,Editor,AreaMeasurement2D,DistanceMeasurement2D,BingMapsLayer,ScaleBar,Expand,Map,MapView,
			BasemapGallery,FeatureLayer,Legend,Search,Locate,Home) { 
		
	//bing/map/view			
			var bing = new BingMapsLayer({
				style: "aerial",
				key: "Ah27iZ_4gTlzg7pSatMCOn8uCHAufMa0VRrPg3Mi7bDgyGNrjMqLcyB3yBvVXORk"
				});
				
					map = new Map({
					basemap: {
						baseLayers: [bing],
						
					}
					});
			view = new MapView({ 
				container: "viewDiv", 
				map: map, 
				//zoom: 12,
				//center: [35.25, 33.29], 
				popup: {
			dockEnabled: true,
			dockOptions: {
				buttonEnabled: false,
				breakpoint: false
			}
			}
				});
			view.ui.remove("zoom");	

	//editor
			editor = new Editor({
				view: view,	container:"edit-c"		
						
			});
			
			$(".edit").click(function () { 
				
				$(".edit-c").show();  
				$(".edit-c").siblings(":not('button')").hide();
			});	
		

			
	//measure	
			measurementarea = new AreaMeasurement2D({
			view: view,container:"measure-c"
			});
			
			measurementWidget = new DistanceMeasurement2D({
				view: view,container:"measure-c"
				});
				$(".measure").click(function () { 
				
					$(".measure-c").show();  
					$(".measure-c").siblings(":not('button')").hide();
				});
				
				
							
					
	//scaleBar
			var scaleBar = new ScaleBar({
					view: view,
					unit: "metric"
					});
					view.ui.add(scaleBar, {
					position: "bottom-right"
					});	
	//Home
			// homeWidget = new Home({
			// 	view: view,center: [35.25, 33.29],zoom:11
			// 	}); view.ui.add(homeWidget,"top-right")

				
	//Locate			
				var locateWidget = new Locate({
				view: view 
				
				});view.ui.add(locateWidget,"bottom-left")
				

	//basemaps
				var basemapGallery = new BasemapGallery({
				view: view,container:"basemaps-c",
				source: {
				portal: {
				url: "https://www.arcgis.com",
				useVectorBasemaps: true  
						}
				}
				});
				$(".basemaps").click(function(){
					$(".basemaps-c").show();  
					$(".basemaps-c").siblings(":not('button')").hide();
				})

	//popup
				var template1 = {
				title: "العقارات",
				content: [
				{
						type: "fields",
				fieldInfos: [
				{
					fieldName: "number",
					label: "رقم العقار"
				},
				{
					fieldName: "المنطقة",
					label: "التصنيف",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "اسم_المنطقة",
					label: "اسم المنطقة",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "Shape__Area",
					label: "مساحة العقار م.م",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "الاستثمار_السطحي",
					label: "الاستثمار السطحي",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "الاستثمار_العام",
					label: "الاستثمار العام",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "عدد_الطوابق",
					label: " عدد الطوابق الاقصى",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "neighbour_parcels",
					label: "العقارات المجاورة",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "النسبة_المئوية_للانحدار",
					label: "% نسبة انحدار العقار ",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				]
						},

						{
		
				type: "media", // MediaContentElement
				mediaInfos: [
					{
					title: "<b>Count by type</b>",
					type: "pie-chart",
					caption: "",
					value: {
						fields: ["relationships/0/Join_ID"],
						normalizeField: null,
						tooltipField: "relationships/0/Join_ID"
					}
					},
					
					
				]
				},


						]
				
				
				};


			var template2 = {
				title: "المالكين",
				content: [
				{
						type: "fields",
				fieldInfos: [
				{
					fieldName: "الرقم",
					label: "رقم العقار"
				},
				{
					fieldName: "اسم_المالك",
					label: "اسم المالك",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "المنطقة_العقارية",
					label: "المنطقة العقارية",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "القسم",
					label: "القسم",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "البلوك",
					label: " البلوك",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "تعيين_العقار",
					label: "تعيين العقار",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "عدد_الاسهم",
					label: " عدد الاسهم",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				{
					fieldName: "مساحة_العقار",
					label: "مساحة العقار",
					format: {
					digitSeparator: true,
					places: 0
					}
				},
				
				]
						}
						]
					};	
	//all layers
			parcels = new FeatureLayer({ 
				url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/map2/FeatureServer/1?token=JWRGcz-OW0VYpL8nqMSZYZpA2m8R5QPpmH6IzbzJTZ-dnguyB6jNBTn_cwOMN8vtbP3ypKyu5xP2djlemf4T5_ZhlaUoO_JjRZpLOEijUOg773dXMQwXgt2KS4uEeVRfEYOf71wYGkUDwH4S18uUFwnMHNfVQd3iLBMS9X-UckPcuf_8ZHKjziIQanome3Ak0EnyXcEL3rI1lzL7pEZwp1PpCqyDsR00FoQfBK378RnY5RhpBQgg3Qy9fsF4lCr_9ZN0M1rBDPrrCml500494A.."
				,popupTemplate: template1,outFields: ["*"]
				});
			owners = new FeatureLayer({ 
				url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/map2/FeatureServer/2?f=pjson&token=JWRGcz-OW0VYpL8nqMSZYZpA2m8R5QPpmH6IzbzJTZ-dnguyB6jNBTn_cwOMN8vtbP3ypKyu5xP2djlemf4T5_ZhlaUoO_JjRZpLOEijUOg773dXMQwXgt2KS4uEeVRfEYOf71wYGkUDwH4S18uUFwnMHNfVQd3iLBMS9X-UckPcuf_8ZHKjziIQanome3Ak0EnyXcEL3rI1lzL7pEZwp1PpCqyDsR00FoQfBK378RnY5RhpBQgg3Qy9fsF4lCr_9ZN0M1rBDPrrCml500494A.."
				,popupTemplate: template2
				});
				map.add(parcels);
				map.add(owners);

				$(".first").change(function(){
					if($(this).prop("checked")){
						map.add(parcels);
						map.add(owners);
					}else{ map.remove(parcels)
						map.remove(owners)
					}
				})
				
			parcels.load().then(function(){
				view.goTo({target:parcels.fullExtent,zoom:12},{duration:4000})
			})

			$(".layer-list").click(function(){
				$(".layer-list-c").show();  
				$(".layer-list-c").siblings(":not('button')").hide();
			})


			baladi=new FeatureLayer({
				url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/map1/FeatureServer/1?f=pjson"
			})
			$(".second").change(function(){
				if($(this).prop("checked")){
					map.add(baladi);				
				}else{ map.remove(baladi)}
			})

			jomhouri= new FeatureLayer({
				url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/map1/FeatureServer/6?f=pjson"
			});
			$(".third").change(function(){
				if($(this).prop("checked")){
					map.add(jomhouri);				
				}else{ map.remove(jomhouri)}
			})

			state= new FeatureLayer({
				url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/map1/FeatureServer/7?f=pjson"
			});
			$(".forth").change(function(){
				if($(this).prop("checked")){
					map.add(state);				
				}else{ map.remove(state)}
			})

			gardens= new FeatureLayer({
				url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/map1/FeatureServer/8?f=pjson"
			});
			$(".fifth").change(function(){
				if($(this).prop("checked")){
					map.add(gardens);				
				}else{ map.remove(gardens)}
			})


			classifications= new FeatureLayer({
				url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/map1/FeatureServer/10?f=pjson"
			});
			$(".sixth").change(function(){
				if($(this).prop("checked")){
					map.add(classifications);				
				}else{ map.remove(classifications)}
			})


	//legend
			var legend = new Legend({
				view: view,container:"legend-c" 
				//layerInfos: [ { layer: parcels,title: "parcels" }],
			});

			$(".legend").click(function(){
				$(".legend-c").show();  
				$(".legend-c").siblings(":not('button')").hide();
			})
				
	//search
			var searchWidget = new Search({
					view: view,container:"search-c",
					allPlaceholder: "بحث",
					sources: [
					{
						layer: parcels,
						searchFields: ["رقم_العقار"],
						displayField: "رقم_العقار",
						exactMatch: true,
						outFields: ["رقم_العقار", "اسم_المنطقة","المنطقة", "Shape__Area","تعيين_العقار", "عدد_المالكين","حدود_العقار"],
						name: "رقم العقار",
						placeholder: "بحث عن عقار"
					},
					{
						layer: owners,
						searchFields: ["اسم_المالك"],
						displayField: "اسم_المالك",
						exactMatch: false,
						outFields: ["*"],
						name: "اسم المالك ",
						placeholder: "اسم المالك"
					},
					]
					});
					
					
			
				$(".search").click(function(){
					$(".search-c").show();  
					$(".search-c").siblings(":not('button')").hide();
				})


		
	//request
			var url = "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/map1/FeatureServer?f=pjson";

			esriRequest(url, {
			responseType: "json"
			}).then(function(response){
			
			geoJson = response.data;
			});

	//clasification chart
		ctx = document.getElementById('myChart').getContext("2d"); 
		chart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["a","b","c"],
			datasets: [{
				label: 'المساحة الكلية ك.م',
				data: [0,0,0],
				backgroundColor: [
					'red','blue','green','yellow','black','gray','orange','purple','cyan'
					
				],
				borderColor:  [
					'red','blue','green','yellow','black','gray','orange','purple','cyan'
				
				],
				borderWidth: 1
			}]
		},
		options: { responsive: false,
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
		});

		query1={
			f:"json",
			where:"1=1",
			orderByFields:"Shape__Area DESC",
			groupByFieldsForStatistics:"نوع_المنطقة",
			outStatistics:[{
				"statisticType": "sum",
				"onStatisticField": "Shape__Area",
				"outStatisticFieldName": "Shape__Area"
			}]

		}
		classifications.queryFeatures(query1).then(function(res){
			result1=res
			
			zone=Array();
			area=Array();
			color1=[]
			dataValues=Array();
			for(let i=0;i<result1.features.length;i++){
				let a=result1.features[i].attributes.نوع_المنطقة;
				let b=result1.features[i].attributes.Shape__Area;
				let c= b/1000000; let d= c.toFixed(2)
				
			zone.push(a);
			area.push(d);
			dataValues.push(0);
			color1.push("#"+Math.floor(Math.random()*10000))

			} 
			function update(){                
			chart.data.datasets[0].data = area;
			chart.data.labels = zone;
			chart.data.datasets[0].backgroundColor =color1
			chart.data.datasets[0].borderColor =color1
			$(".charts").slideDown();
			chart.update();         
			} update()
		})
		$(".classification").click(function(){
			$(".classification-c").show();  
			$(".classification-c").siblings(":not('button')").hide();
		})

//related records charts

ctx2 = document.getElementById('myChart2').getContext("2d"); 
chart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
	  labels: ["a","b","c"],
	  datasets: [{
		  label: 'عدد الاسهم',
		  data: [0,0,0],
		  backgroundColor: [
			'red','blue','green','yellow','black','gray','orange','purple','cyan'
			 
		  ],
		  borderColor:  [
			'red','blue','green','yellow','black','gray','orange','purple','cyan'
		   
		],
		  borderWidth: 1
	  }]
  },
  options: { responsive: false,
	  scales: {
		  yAxes: [{
			  ticks: {
				  beginAtZero: true
			  }
		  }]
	  }
  }
});

	function queryRelated(event){
         
		query3={
		  f:"json",
		  geometry: event,
		  outFields:"*"
		}
		parcels.queryFeatures(query3).then(function(result){
		  str2= JSON.stringify(result)
		  pars2=JSON.parse(str2);
		  res=result,
		  objid=res.features[0].attributes.OBJECTID
		  //console.log(res)		  


		  query4= {
			objectIds: objid,
			relationshipId:0,
			f:"json",
			outFields:"*"
		  } 
		  parcels.queryRelatedFeatures(query4).then(function(result2){           
			res2=result2
			console.log(res2)
			ownersNames=[];
			persantage=[];
			color2=[];
			for(let i=0; i<res2[objid].features.length;i++){
			  owner=res2[objid].features[i].attributes.اسم_المالك;
			  ownersNames.push(owner);
			  pers= res2[objid].features[i].attributes.عدد_الاسهم;
			  persantage.push(pers);
			  color2.push("#"+Math.floor(Math.random()*10000))

			}
			
			chart2.data.datasets[0].data = persantage;
			chart2.data.labels = ownersNames;  
			chart2.data.datasets[0].backgroundColor =color2
			chart2.data.datasets[0].borderColor =color2            
			chart2.update(); 
			})
		  
		})
	  }
	  
	  view.on("click",function(e){      
		queryRelated(e.mapPoint);
		$(".chart-icon").show(500)
	  })


			
	});