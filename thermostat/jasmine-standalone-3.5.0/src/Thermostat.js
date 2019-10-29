'use strict';

function Thermostat(){
    this._temp = 20;
    this._powerSaving = true;
}

Thermostat.prototype.powerSavingOff = function(){
  this._powerSaving = false;
}
Thermostat.prototype.temp = function(){
  return this._temp;
};

Thermostat.prototype.down = function(num){
  if ((this._temp - num) <= 10){
    this._temp = 10;
  } else {
  this._temp -= num;
}
};

Thermostat.prototype.up = function(num){
  if ((this._powerSaving === true) && (this._temp + num >= 25)){
    this._temp = 25;
  } else if(this._temp + num >= 32){
    this._temp = 32;
  } else {
    this._temp += num;
  }
};

Thermostat.prototype.reset = function(){
  this._temp = 20;
};

Thermostat.prototype.usage = function(){
  if (this._temp < 18){
    return 'low-usage';
  } else if(this._temp < 25){
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
