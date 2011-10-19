/*
 * Based on the configuration in ../../configure.zcml this JavaScript will only
 * be loaded when the user is looking at an ExampleDevice in the web interface.
 */

(function(){

var ZC = Ext.ns('Zenoss.component');

function render_link(ob) {
    if (ob && ob.uid) {
        return Zenoss.render.link(ob.uid);
    } else {
        return ob;
    }
}

ZC.HttpComponentPanel = Ext.extend(ZC.ComponentGridPanel, {
    constructor: function(config) {
        config = Ext.applyIf(config||{}, {
            componentType: 'HttpComponent',
            fields: [
                {name: 'uid'},
                {name: 'severity'},
                {name: 'status'},
                {name: 'name'},
                {name: 'httpUrl'},
                {name: 'httpPort'},
                {name: 'httpJsonPost'},
                {name: 'httpFindString'},
                {name: 'monitor'},
                {name: 'monitored'},
                {name: 'locking'}
            ],
            columns: [{
                id: 'severity',
                dataIndex: 'severity',
                header: _t('Events'),
                renderer: Zenoss.render.severity,
                sortable: true,
                width: 50
            },{
                id: 'name',
                dataIndex: 'name',
                header: _t('CC Name'),
                sortable: true
            },{
                id: 'httpUrl',
                dataIndex: 'httpUrl',
                header: _t('URL'),
                sortable: true,
                width: 150
            },{
                id: 'httpPort',
                dataIndex: 'httpPort',
                header: _t('Port'),
                sortable: true,
                width: 70
            },{
                id: 'httpJsonPost',
                dataIndex: 'httpJsonPost',
                header: _t('POST'),
                sortable: true,
                width: 120
            },{
                id: 'httpFindString',
                dataIndex: 'httpFindString',
                header: _t('Find'),
                sortable: true,
                width: 120
            },{
                id: 'status',
                dataIndex: 'status',
                header: _t('Status'),
                width: 70
            },{
                id: 'monitored',
                dataIndex: 'monitored',
                header: _t('Monitored'),
                sortable: true,
                width: 65
            },{
                id: 'locking',
                dataIndex: 'locking',
                header: _t('Locking'),
                renderer: Zenoss.render.locking_icons,
                sortable: true,
                width: 65
            }
			]
        });
        ZC.HttpComponentPanel.superclass.constructor.call(this, config);
    }
});

Ext.reg('HttpComponentPanel', ZC.HttpComponentPanel);
ZC.registerName('HttpComponent', _t('Monitored URL'), _t('Monitored URLs'));

})();

