Ext.define('YDisk.view.form.FileForm', {
    extend: 'Ext.Container',
    xtype: 'file-form',

    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.File'
    ],

    config: {
        title: 'Add New File',
        layout: 'fit',

        items: [
            {
                xtype: 'formpanel',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Select A File',
                        items: [
                            {
                                xtype: 'file',
                                name: 'file'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        /*
                        defaults: {
                            labelWidth: '35%'
                        },
                        */
                        title: 'File Name',
                        items: [
                            {
                                xtype: 'textfield',
                                //label: 'File Name',
                                name: 'name'
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

        formPanel.updateRecord(record);

        return record;
    },

    onKeyUp: function() {
        this.fireEvent('change', this);
    }
});
