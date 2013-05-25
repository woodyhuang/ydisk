Ext.define('YDisk.controller.Application', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            main: 'main',
            addButton: '#addButton',
            accounts: 'accounts',
			files: 'files',
			accountForm: 'account-form',
            fileForm: 'file-form',
            saveButton: '#saveButton'
        },

        control: {
            /*
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            */
            addButton: {
                tap: 'onAdd'
            },
		    saveButton: {
                tap: 'onSave'
            },
            accounts: {
                itemtap: 'onAccountSelect'
            }
        }
    },
    /*
    onMainPush: function(view, item) {
        var addButton = this.getAddButton();
		console.debug('onMainPush, addBtn:', addButton);
    },
    onMainPop: function(view, item) {
		console.debug('onMainPop, item:', item);
    },
    */
    onAccountSelect: function(list, index, node, record) {
        var addButton = this.getAddButton();
        
        if (!this.files) {
            this.files = Ext.create('YDisk.view.Files');
        }

        // update path as Nav Title
        this.files.setTitle(record.data['title'])

        // update file data
        //this.files.setRecord(record);
        var store = this.files.getStore('Files');
        store.applyData([{'name': record.data['title'] + ' - f1'},
                        {'name': record.data['title'] + ' - f2'}]);

        // Push the show contact view into the navigation view
        this.getMain().push(this.files);
    },

    onAdd: function() {
        var currentView = this.getMain().getActiveItem();
        if ('files' == currentView.xtype) {
            this.showFileForm();
        } else if ('accounts' == currentView.xtype) {
            this.showAccountForm();
        } else {
            Ext.Msg.alert('Error! Please restart your app.');
        }
    },

    showAccountForm: function(){
        if (!this.accountForm) {
            this.accountForm = Ext.create('YDisk.view.form.AccountForm');
        }
        this.getMain().push(this.accountForm);
    },
    
    showFileForm: function(){
        if (!this.fileForm) {
            this.fileForm = Ext.create('YDisk.view.form.FileForm');
        }
        this.getMain().push(this.fileForm);
    }

});
