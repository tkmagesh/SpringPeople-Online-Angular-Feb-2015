function SalaryCalculator(){
            var _data = {
                basic : 0,
                hra : 0,
                da : 0,
                tax : 0,
                salary : 0
            };
            this.get = function(attrName){
                return _data[attrName];
            };
            this.set = function(attrName, value){
                _data[attrName] = value;
                //trigger change notification to all subscribers
                //triggerEvents(attrName)
            };

            var _subscribers = {
                basic : [],
                hra : [],
                da : [],
                tax : [],
                salary : []
            };

            this.addSubscriber = function(attrName, subscriptionFn){
                //_subscribers[attrName] = _subscribers[attrName] || [];
                /*if (typeof _subscribers[attrName] === "undefined")
                    _subscribers[attrName] = [];*/

                _subscribers[attrName].push(subscriptionFn);
            };

            this.removeSubscriber = function(attrName, subscriptionFn){
                //fill in the blanks
            };

            function triggerEvents(attrName){
                var subscriptionFns = _subscribers[attrName] || [];
                for(var i=0; i< subscriptionFns.length; i++){
                    var subscriptionFn = subscriptionFns[i];
                    subscriptionFn();
                }

            }

        }
        SalaryCalculator.prototype.calculate = function(){
            var gross = this.get('basic') + this.get('hra') + this.get('da');
            var net = gross * ((100-this.get('tax'))/100);
            this.set('salary',net);

        }
