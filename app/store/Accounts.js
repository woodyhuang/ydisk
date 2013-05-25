Ext.define('YDisk.store.Accounts', {
    extend: 'Ext.data.Store',

    config: {
        model: 'YDisk.model.Account',
        autoLoad: true,
        sorters: 'title',
        /*
		grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
		*/
        proxy: {
            type: 'ajax',
            url: 'accounts.json'
        }
    }
});
