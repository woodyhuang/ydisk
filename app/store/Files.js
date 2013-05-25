Ext.define('YDisk.store.Files', {
    extend: 'Ext.data.Store',

    config: {
        model: 'YDisk.model.File',
        autoLoad: true,
        sorters: 'name',
		grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
        data: [{'name':'f1'}, {'name':'f2'}]
		/*
        proxy: {
            type: 'ajax',
            url: 'accounts.json'
        }
		*/
    }
});
