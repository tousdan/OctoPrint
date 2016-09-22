$(function() {
    function ResetPasswordViewmodel(parameters) {
        var self = this;

        self.closeDialog = function() {
            self.dialog.modal("hide");
        };

        self.onStartup = function() {
            self.dialog = $("#resetpassword_dialog");
        };

        self.onAllBound = function() {
            self.dialog.modal({
                minHeight: function() { return Math.max($.fn.modal.defaults.maxHeight() - 80, 250); }
            }).css({
                width: 'auto',
                'margin-left': function() { return -($(this).width() /2); }
            });
        };

        self.onResetPassword = function() {

            var invalid = self.validate();

            console.debug(invalid);
            if (invalid) {
                return;
            }

            self.doResetPassword();
        };

        self.validate = function() {
            if (!self.username) {
                return ["username"];
            }

            if (!self.password) {
                return ["password"];
            }

            if (self.confirm !== self.password) {
                return ["confirm"];
            }

            return;
        };

        self.doResetPassword = function() {
            //TODO: do ajaxy things to the API.
            self.closeDialog();
        };

        self.username = "";
        self.password = "";
        self.confirm = "";

    }

    OCTOPRINT_VIEWMODELS.push([
            ResetPasswordViewmodel,
            [],
            "#resetpassword_dialog"
    ]);
});
