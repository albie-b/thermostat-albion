'use strict';

describe('Thermostat',function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  describe('temp tests',function(){
    it('can view temp', function(){
      expect(thermostat.temp()).toEqual(20);
    });
    it('can increase temp', function(){
      thermostat.down(2);
      expect(thermostat.temp()).toEqual(18);
    });
    it('can decrease temp', function(){
      thermostat.up(2);
      expect(thermostat.temp()).toEqual(22);
    });
    it('cannot do below 10', function(){
      thermostat.down(20);
      expect(thermostat.temp()).toEqual(10);
    });
  });
  describe('power saving tests',function(){
    it('cannot do above 25 with power saving', function(){
      thermostat.up(20);
      expect(thermostat.temp()).toEqual(25);
    });
    it('cannot do above 32 without power saving', function(){
      thermostat.powerSavingOff();
      thermostat.up(34);
      expect(thermostat.temp()).toEqual(32);
    });
  });
  describe('other tests',function(){
    it('can press reset to reset temp to 20', function(){
      thermostat.down(5);
      thermostat.reset();
      expect(thermostat.temp()).toEqual(20);
    });
  });
  describe('power usage tests',function(){
    it('should say low', function(){
      thermostat.down(10);
      expect(thermostat.usage()).toEqual('low-usage');
    });
    it('should say medium', function(){
      expect(thermostat.usage()).toEqual('medium-usage');
    });
    it('should say high', function(){
      thermostat.powerSavingOff();
      thermostat.up(10);
      expect(thermostat.usage()).toEqual('high-usage');
    });
  });
});
