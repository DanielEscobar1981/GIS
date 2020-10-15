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
var format_DEPARTAMENTOSCTESVERIF_1 = new ol.format.GeoJSON();
var features_DEPARTAMENTOSCTESVERIF_1 = format_DEPARTAMENTOSCTESVERIF_1.readFeatures(json_DEPARTAMENTOSCTESVERIF_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTOSCTESVERIF_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTOSCTESVERIF_1.addFeatures(features_DEPARTAMENTOSCTESVERIF_1);
var lyr_DEPARTAMENTOSCTESVERIF_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTAMENTOSCTESVERIF_1, 
                style: style_DEPARTAMENTOSCTESVERIF_1,
                interactive: false,
                title: '<img src="styles/legend/DEPARTAMENTOSCTESVERIF_1.png" /> DEPARTAMENTOSCTESVERIF'
            });
var format_BARRIOSINVICOCAPITALfinal_2 = new ol.format.GeoJSON();
var features_BARRIOSINVICOCAPITALfinal_2 = format_BARRIOSINVICOCAPITALfinal_2.readFeatures(json_BARRIOSINVICOCAPITALfinal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARRIOSINVICOCAPITALfinal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOSINVICOCAPITALfinal_2.addFeatures(features_BARRIOSINVICOCAPITALfinal_2);
var lyr_BARRIOSINVICOCAPITALfinal_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BARRIOSINVICOCAPITALfinal_2, 
                style: style_BARRIOSINVICOCAPITALfinal_2,
                interactive: false,
                title: '<img src="styles/legend/BARRIOSINVICOCAPITALfinal_2.png" /> BARRIOSINVICOCAPITALfinal'
            });
var format_SANTACATALINA_3 = new ol.format.GeoJSON();
var features_SANTACATALINA_3 = format_SANTACATALINA_3.readFeatures(json_SANTACATALINA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SANTACATALINA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SANTACATALINA_3.addFeatures(features_SANTACATALINA_3);
var lyr_SANTACATALINA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SANTACATALINA_3, 
                style: style_SANTACATALINA_3,
                interactive: true,
                title: '<img src="styles/legend/SANTACATALINA_3.png" /> SANTACATALINA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DEPARTAMENTOSCTESVERIF_1.setVisible(true);lyr_BARRIOSINVICOCAPITALfinal_2.setVisible(true);lyr_SANTACATALINA_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DEPARTAMENTOSCTESVERIF_1,lyr_BARRIOSINVICOCAPITALfinal_2,lyr_SANTACATALINA_3];
lyr_DEPARTAMENTOSCTESVERIF_1.set('fieldAliases', {'id': 'id', 'OBJETO': 'OBJETO', 'NOMBREDEPA': 'NOMBREDEPA', 'INDECCODIG': 'INDECCODIG', 'FUENTE': 'FUENTE', });
lyr_BARRIOSINVICOCAPITALfinal_2.set('fieldAliases', {'Nombre': 'Nombre', 'Descripcio': 'Descripcio', 'Monto Obra': 'Monto Obra', 'Fecha Entr': 'Fecha Entr', 'Empresa': 'Empresa', });
lyr_SANTACATALINA_3.set('fieldAliases', {'NRO_LEGAJO': 'NRO_LEGAJO', 'DOMICILIO': 'DOMICILIO', 'ADJUDICATA': 'ADJUDICATA', 'DNI_ADJ': 'DNI_ADJ', 'ADREMA': 'ADREMA', 'MEDIDAS_TE': 'MEDIDAS_TE', 'CUOTAS_DEL': 'CUOTAS_DEL', 'CUOTAS_PAG': 'CUOTAS_PAG', 'TIENE ESCR': 'TIENE ESCR', 'SITUACION': 'SITUACION', 'ESTADO': 'ESTADO', });
lyr_DEPARTAMENTOSCTESVERIF_1.set('fieldImages', {'id': 'TextEdit', 'OBJETO': 'TextEdit', 'NOMBREDEPA': 'TextEdit', 'INDECCODIG': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_BARRIOSINVICOCAPITALfinal_2.set('fieldImages', {'Nombre': 'TextEdit', 'Descripcio': 'TextEdit', 'Monto Obra': 'TextEdit', 'Fecha Entr': 'DateTime', 'Empresa': 'TextEdit', });
lyr_SANTACATALINA_3.set('fieldImages', {'NRO_LEGAJO': 'TextEdit', 'DOMICILIO': 'TextEdit', 'ADJUDICATA': 'TextEdit', 'DNI_ADJ': 'TextEdit', 'ADREMA': 'TextEdit', 'MEDIDAS_TE': 'TextEdit', 'CUOTAS_DEL': 'TextEdit', 'CUOTAS_PAG': 'TextEdit', 'TIENE ESCR': 'TextEdit', 'SITUACION': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_DEPARTAMENTOSCTESVERIF_1.set('fieldLabels', {'id': 'no label', 'OBJETO': 'no label', 'NOMBREDEPA': 'inline label', 'INDECCODIG': 'inline label', 'FUENTE': 'no label', });
lyr_BARRIOSINVICOCAPITALfinal_2.set('fieldLabels', {'Nombre': 'inline label', 'Descripcio': 'inline label', 'Monto Obra': 'inline label', 'Fecha Entr': 'inline label', 'Empresa': 'inline label', });
lyr_SANTACATALINA_3.set('fieldLabels', {'NRO_LEGAJO': 'inline label', 'DOMICILIO': 'inline label', 'ADJUDICATA': 'inline label', 'DNI_ADJ': 'inline label', 'ADREMA': 'inline label', 'MEDIDAS_TE': 'inline label', 'CUOTAS_DEL': 'inline label', 'CUOTAS_PAG': 'inline label', 'TIENE ESCR': 'inline label', 'SITUACION': 'inline label', 'ESTADO': 'inline label', });
lyr_SANTACATALINA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});