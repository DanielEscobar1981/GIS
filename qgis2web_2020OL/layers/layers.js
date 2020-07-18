ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-60.543932, -30.886087, -53.814290, -27.236648]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_CorrientesProvincia_1 = new ol.format.GeoJSON();
var features_CorrientesProvincia_1 = format_CorrientesProvincia_1.readFeatures(json_CorrientesProvincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CorrientesProvincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorrientesProvincia_1.addFeatures(features_CorrientesProvincia_1);
var lyr_CorrientesProvincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CorrientesProvincia_1, 
                style: style_CorrientesProvincia_1,
                interactive: false,
                title: '<img src="styles/legend/CorrientesProvincia_1.png" /> CorrientesProvincia'
            });
var format_DepartamentoCorrientes_2 = new ol.format.GeoJSON();
var features_DepartamentoCorrientes_2 = format_DepartamentoCorrientes_2.readFeatures(json_DepartamentoCorrientes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DepartamentoCorrientes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentoCorrientes_2.addFeatures(features_DepartamentoCorrientes_2);
var lyr_DepartamentoCorrientes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentoCorrientes_2, 
                style: style_DepartamentoCorrientes_2,
                interactive: false,
                title: '<img src="styles/legend/DepartamentoCorrientes_2.png" /> DepartamentoCorrientes'
            });
var format_ModBasicosJunio2020V2_3 = new ol.format.GeoJSON();
var features_ModBasicosJunio2020V2_3 = format_ModBasicosJunio2020V2_3.readFeatures(json_ModBasicosJunio2020V2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ModBasicosJunio2020V2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModBasicosJunio2020V2_3.addFeatures(features_ModBasicosJunio2020V2_3);
var lyr_ModBasicosJunio2020V2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ModBasicosJunio2020V2_3, 
                style: style_ModBasicosJunio2020V2_3,
                interactive: true,
    title: 'ModBasicosJunio2020V2<br />\
    <img src="styles/legend/ModBasicosJunio2020V2_3_0.png" /> 1<br />\
    <img src="styles/legend/ModBasicosJunio2020V2_3_1.png" /> 25<br />\
    <img src="styles/legend/ModBasicosJunio2020V2_3_2.png" /> 40<br />\
    <img src="styles/legend/ModBasicosJunio2020V2_3_3.png" /> 50<br />\
    <img src="styles/legend/ModBasicosJunio2020V2_3_4.png" /> 75<br />\
    <img src="styles/legend/ModBasicosJunio2020V2_3_5.png" /> 95<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_CorrientesProvincia_1.setVisible(true);lyr_DepartamentoCorrientes_2.setVisible(true);lyr_ModBasicosJunio2020V2_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_CorrientesProvincia_1,lyr_DepartamentoCorrientes_2,lyr_ModBasicosJunio2020V2_3];
lyr_CorrientesProvincia_1.set('fieldAliases', {'gid': 'gid', '__gid': '__gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_DepartamentoCorrientes_2.set('fieldAliases', {'gid': 'gid', '__gid': '__gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_ModBasicosJunio2020V2_3.set('fieldAliases', {'id': 'id', 'localidad': 'localidad', 'etapa': 'etapa', 'id sig': 'id sig', 'solucion': 'solucion', 'dominio': 'dominio', 'estado': 'estado', 'avance': 'avance', 'latitud': 'latitud', 'longitud': 'longitud', 'departamen': 'departamen', 'expediente': 'expediente', 'resolucion': 'resolucion', });
lyr_CorrientesProvincia_1.set('fieldImages', {'gid': 'TextEdit', '__gid': 'TextEdit', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_DepartamentoCorrientes_2.set('fieldImages', {'gid': 'TextEdit', '__gid': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_ModBasicosJunio2020V2_3.set('fieldImages', {'id': 'TextEdit', 'localidad': 'TextEdit', 'etapa': 'TextEdit', 'id sig': 'TextEdit', 'solucion': 'TextEdit', 'dominio': 'TextEdit', 'estado': 'TextEdit', 'avance': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'departamen': 'TextEdit', 'expediente': 'TextEdit', 'resolucion': 'TextEdit', });
lyr_CorrientesProvincia_1.set('fieldLabels', {'gid': 'no label', '__gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_DepartamentoCorrientes_2.set('fieldLabels', {'gid': 'no label', '__gid': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'inline label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_ModBasicosJunio2020V2_3.set('fieldLabels', {'id': 'no label', 'localidad': 'inline label', 'etapa': 'inline label', 'id sig': 'inline label', 'solucion': 'inline label', 'dominio': 'inline label', 'estado': 'inline label', 'avance': 'inline label', 'latitud': 'no label', 'longitud': 'no label', 'departamen': 'inline label', 'expediente': 'inline label', 'resolucion': 'inline label', });
lyr_ModBasicosJunio2020V2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});