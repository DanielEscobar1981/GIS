var wms_layers = [];

var format_DEPARTAMENTOS_0 = new ol.format.GeoJSON();
var features_DEPARTAMENTOS_0 = format_DEPARTAMENTOS_0.readFeatures(json_DEPARTAMENTOS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTOS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTOS_0.addFeatures(features_DEPARTAMENTOS_0);
var lyr_DEPARTAMENTOS_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTAMENTOS_0, 
                style: style_DEPARTAMENTOS_0,
                interactive: false,
                title: '<img src="styles/legend/DEPARTAMENTOS_0.png" /> DEPARTAMENTOS'
            });
var format_MUNICIPIOS_1 = new ol.format.GeoJSON();
var features_MUNICIPIOS_1 = format_MUNICIPIOS_1.readFeatures(json_MUNICIPIOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_1.addFeatures(features_MUNICIPIOS_1);
var lyr_MUNICIPIOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIOS_1, 
                style: style_MUNICIPIOS_1,
                interactive: false,
                title: '<img src="styles/legend/MUNICIPIOS_1.png" /> MUNICIPIOS'
            });
var format_OONDIVE_2 = new ol.format.GeoJSON();
var features_OONDIVE_2 = format_OONDIVE_2.readFeatures(json_OONDIVE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OONDIVE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OONDIVE_2.addFeatures(features_OONDIVE_2);
var lyr_OONDIVE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OONDIVE_2, 
                style: style_OONDIVE_2,
                interactive: true,
    title: 'OÑONDIVE<br />\
    <img src="styles/legend/OONDIVE_2_0.png" /> A INICIAR<br />\
    <img src="styles/legend/OONDIVE_2_1.png" /> EN OBRA<br />\
    <img src="styles/legend/OONDIVE_2_2.png" /> OBRA FINALIZADA<br />'
        });

lyr_DEPARTAMENTOS_0.setVisible(true);lyr_MUNICIPIOS_1.setVisible(true);lyr_OONDIVE_2.setVisible(true);
var layersList = [lyr_DEPARTAMENTOS_0,lyr_MUNICIPIOS_1,lyr_OONDIVE_2];
lyr_DEPARTAMENTOS_0.set('fieldAliases', {'id': 'id', 'OBJETO': 'OBJETO', 'NOMBREDEPA': 'NOMBREDEPA', 'INDECCODIG': 'INDECCODIG', 'FUENTE': 'FUENTE', });
lyr_MUNICIPIOS_1.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'objeto': 'objeto', 'localidadn': 'localidadn', 'codigoinde': 'codigoinde', 'fuente': 'fuente', });
lyr_OONDIVE_2.set('fieldAliases', {'LOCALIDAD': 'LOCALIDAD', 'DEPARTAMEN': 'DEPARTAMEN', 'ETAPA': 'ETAPA', 'ID SIG': 'ID SIG', 'SOLUCION': 'SOLUCION', 'ESTADO': 'ESTADO', 'AVANCE_POR': 'AVANCE_POR', 'EXPEDIENTE': 'EXPEDIENTE', 'RESOLUCION': 'RESOLUCION', 'GEOREFERENCIA': 'GEOREFERENCIA', 'DOMINIO': 'DOMINIO', });
lyr_DEPARTAMENTOS_0.set('fieldImages', {'id': 'TextEdit', 'OBJETO': 'TextEdit', 'NOMBREDEPA': 'TextEdit', 'INDECCODIG': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_MUNICIPIOS_1.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'objeto': 'TextEdit', 'localidadn': 'TextEdit', 'codigoinde': 'TextEdit', 'fuente': 'TextEdit', });
lyr_OONDIVE_2.set('fieldImages', {'LOCALIDAD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'ETAPA': 'TextEdit', 'ID SIG': 'Range', 'SOLUCION': 'Range', 'ESTADO': 'TextEdit', 'AVANCE_POR': 'Range', 'EXPEDIENTE': 'TextEdit', 'RESOLUCION': 'TextEdit', 'GEOREFERENCIA': 'TextEdit', 'DOMINIO': 'TextEdit', });
lyr_DEPARTAMENTOS_0.set('fieldLabels', {'id': 'no label', 'OBJETO': 'no label', 'NOMBREDEPA': 'no label', 'INDECCODIG': 'no label', 'FUENTE': 'no label', });
lyr_MUNICIPIOS_1.set('fieldLabels', {'id': 'no label', 'gid': 'no label', 'objeto': 'no label', 'localidadn': 'inline label', 'codigoinde': 'no label', 'fuente': 'no label', });
lyr_OONDIVE_2.set('fieldLabels', {'LOCALIDAD': 'inline label', 'DEPARTAMEN': 'inline label', 'ETAPA': 'inline label', 'ID SIG': 'inline label', 'SOLUCION': 'inline label', 'ESTADO': 'inline label', 'AVANCE_POR': 'inline label', 'EXPEDIENTE': 'inline label', 'RESOLUCION': 'inline label', 'GEOREFERENCIA': 'inline label', 'DOMINIO': 'inline label', });
lyr_OONDIVE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});