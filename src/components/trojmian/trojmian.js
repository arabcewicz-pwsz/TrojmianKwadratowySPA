define(['knockout', 'text!./trojmian.html', 'knockout.validation'], function (ko, templateMarkup) {

    function Trojmian(params) {
        var self = this;

        self.a = ko.observable("").extend({required: true, number: true});
        self.b = ko.observable("").extend({required: true, number: true});
        self.c = ko.observable("").extend({required: true, number: true});

        self.x1 = ko.observable("");
        self.x2 = ko.observable("");

        self.liczba_rozwiazan = ko.observable("");

        function validateForm() {
            var errors = ko.validation.group([self]);
            if (errors().length > 0) {
                errors.showAllMessages();
                return false;
            }
            return true;
        }

        self.rozwiaz = function () {
            if (!validateForm())
                return;
            var delta = self.b() * self.b() - 4 * self.a() * self.c();
            if (delta > 0) {
                self.liczba_rozwiazan(2);
                self.x1((-self.b() - Math.sqrt(delta)) / (2 * self.a()));
                self.x2((-self.b() + Math.sqrt(delta)) / (2 * self.a()));
            }
            else if (delta == 0) {
                self.liczba_rozwiazan(1);
                self.x1(-self.b() / 2);
            }
            else {
                self.liczba_rozwiazan(0);
                self.x1("");
                self.x2("");
            }
        };
        self.obliczono = function () {
            return !isNaN(parseInt(self.liczba_rozwiazan()));
        };

        self.nowe = function () {
            self.a("");
            self.a.isModified(false);
            self.b("");
            self.b.isModified(false);
            self.c("");
            self.c.isModified(false);
            self.liczba_rozwiazan("");
        }

    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    Trojmian.prototype.dispose = function () {
    };

    return {viewModel: Trojmian, template: templateMarkup};

});
