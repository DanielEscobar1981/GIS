ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-60.579006, -30.660283, -53.849364, -27.010844]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DepartamentoCorrientes_1 = new ol.format.GeoJSON();
var features_DepartamentoCorrientes_1 = format_DepartamentoCorrientes_1.readFeatures(json_DepartamentoCorrientes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DepartamentoCorrientes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentoCorrientes_1.addFeatures(features_DepartamentoCorrientes_1);
var lyr_DepartamentoCorrientes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentoCorrientes_1, 
                style: style_DepartamentoCorrientes_1,
                interactive: true,
                title: '<img src="styles/legend/DepartamentoCorrientes_1.png" /> DepartamentoCorrientes'
            });
var format_ModBasicosJunio2020V2_2 = new ol.format.GeoJSON();
var features_ModBasicosJunio2020V2_2 = format_ModBasicosJunio2020V2_2.readFeatures(json_ModBasicosJunio2020V2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ModBasicosJunio2020V2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModBasicosJunio2020V2_2.addFeatures(features_ModBasicosJunio2020V2_2);
var lyr_ModBasicosJunio2020V2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ModBasicosJunio2020V2_2, 
                style: style_ModBasicosJunio2020V2_2,
                interactive: true,
    title: 'ModBasicosJunio2020V2<br />\
    <img src="styles/legend/ModBasicosJunio2020V2_2_0.png" /> 1<br />\
    <img src="styles/legend/ModBasicosJunio2020V2_2_1.png" /> 25<br />\
    <img src="styles/legend/ModBasicosJunio2020V2_2_2.png" /> 50<br />\
    <img src="styles/legend/ModBasicosJunio2020V2_2_3.png" /> 75<br />\
    <img src="styles/legend/ModBasicosJunio2020V2_2_4.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_DepartamentoCorrientes_1.setVisible(true);lyr_ModBasicosJunio2020V2_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DepartamentoCorrientes_1,lyr_ModBasicosJunio2020V2_2];
lyr_DepartamentoCorrientes_1.set('fieldAliases', {'gid': 'gid', '__gid': '__gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_ModBasicosJunio2020V2_2.set('fieldAliases', {'id': 'id', 'localidad': 'localidad', 'etapa': 'etapa', 'id sig': 'id sig', 'solucion': 'solucion', 'dominio': 'dominio', 'estado': 'estado', 'avance': 'avance', 'latitud': 'latitud', 'longitud': 'longitud', 'departamen': 'departamen', 'expediente': 'expediente', 'resolucion': 'resolucion', });
lyr_DepartamentoCorrientes_1.set('fieldImages', {'gid': 'TextEdit', '__gid': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_ModBasicosJunio2020V2_2.set('fieldImages', {'id': 'TextEdit', 'localidad': 'TextEdit', 'etapa': 'TextEdit', 'id sig': 'TextEdit', 'solucion': 'TextEdit', 'dominio': 'TextEdit', 'estado': 'TextEdit', 'avance': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'departamen': 'TextEdit', 'expediente': 'TextEdit', 'resolucion': 'TextEdit', });
lyr_DepartamentoCorrientes_1.set('fieldLabels', {'gid': 'no label', '__gid': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'header label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_ModBasicosJunio2020V2_2.set('fieldLabels', {'id': 'no label', 'localidad': 'inline label', 'etapa': 'inline label', 'id sig': 'inline label', 'solucion': 'inline label', 'dominio': 'inline label', 'estado': 'inline label', 'avance': 'inline label', 'latitud': 'no label', 'longitud': 'no label', 'departamen': 'inline label', 'expediente': 'inline label', 'resolucion': 'inline label', });
lyr_ModBasicosJunio2020V2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});