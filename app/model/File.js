Ext.define('YDisk.model.File', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'name',
            'date',
            'size',
			'type',
			'url'
        ]
    }
});
