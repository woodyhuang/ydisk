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
            main: {
                //push: 'onMainPush',
                pop: 'onMainPop'
            },
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
    */

    onMainPop: function(view, item) {
        this.hideSaveBtn();
    },
    
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
        
        var fs = [{'name': 'readme.txt'},
                  {'name': 'guide.html'},
                 ]
        
        if ('Baidu Disk' == record.data['title']) {
            fs = [{'name': 'java.exe'},
                  {'name': 'index.html'},
                  {'name': 'TODO'},
                  {'name': 'YDisk.pptx'},
                  {'name': 'YDisk Framework Design.docx'},
                 ]
        }
        store.applyData(fs);

        // Push the show contact view into the navigation view
        this.getMain().push(this.files);
    },

    onAdd: function() {
        var currentView = this.getMain().getActiveItem();
        if ('files' == currentView.xtype) {
            this.showFileForm();
            this.showSaveBtn();
        } else if ('accounts' == currentView.xtype) {
            this.showAccountForm();
            this.showSaveBtn();
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
    },

    onSave: function(){
        var currentView = this.getMain().getActiveItem();
        if ('file-form' == currentView.xtype) {
            this.saveFile();
            this.getMain().pop();
        } else if ('account-form' == currentView.xtype) {
            this.saveAccount();
            this.getMain().pop();
        } else {
            Ext.Msg.alert('Error! Please restart your app.');
        }
    },

    saveFile: function(){
        this.fileForm.saveRecord();
        // update files
    },

    saveAccount: function(){
        this.accountForm.saveRecord();
        // update accounts
    },

    showSaveBtn: function(){
        this.getAddButton().hide();
        this.getSaveButton().show();
    },

    hideSaveBtn: function() {
        var saveBtn = this.getSaveButton();
        if (!saveBtn.isHidden()) {
            this.getAddButton().show();
            this.getSaveButton().hide();
        }
    }
});
