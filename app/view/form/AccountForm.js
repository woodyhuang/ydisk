Ext.define('YDisk.view.form.AccountForm', {
    extend: 'Ext.Container',
    xtype: 'account-form',

    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.Password',
        'Ext.field.Select'
    ],

    config: {
        title: 'Add New Account',
        layout: 'fit',

        items: [
            {
                xtype: 'formpanel',
                items: [
                    {
                        xtype: 'fieldset',
                        /*
                        defaults: {
                            labelWidth: '35%'
                        },
                        */
                        title: 'Account Info',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Title',
                                name: 'title'
                            },
                            {
                                xtype: 'selectfield',
                                label: 'Disk Type',
                                name: 'src',
                                options: [
                                    {
                                        text : 'Baidu Cloud Disk',
                                        value: 'baidu'
                                    },
                                    {
                                        text : 'Amazon Cloud Disk',
                                        value: 'amazon'
                                    },
                                    {
                                        text : 'Dropbox',
                                        value: 'dropbox'
                                    }
                                ]
                            },
                            {
                                xtype: 'textfield',
                                label: 'Username',
                                name: 'name'
                            },
                            {
                                xtype: 'passwordfield',
                                label: 'Password',
                                name: 'password'
                            }
                        ]
                    }
                ]
            }
        ],

        listeners: {
            delegate: 'textfield',
            keyup: 'onKeyUp'
        },

        record: null
    },

    updateRecord: function(newRecord) {
        this.down('formpanel').setRecord(newRecord);
    },

    saveRecord: function() {
        var formPanel = this.down('formpanel'),
            record = formPanel.getRecord();
        
        console.debug('account form save  -  record:', record);

        formPanel.updateRecord(record);

        return record;
    },

    onKeyUp: function() {
        this.fireEvent('change', this);
    }
});
