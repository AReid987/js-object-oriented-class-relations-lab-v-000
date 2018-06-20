let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers(){
    let p = []
    let trips = this.trips()
    let t;
    trips.forEach(function(trip) {
	     t = store.passengers.find(function(passenger){
			 return passenger.id === trip.passengerId
     })
     p.push(t)
    })
    return p
  }
}

let passengerId = 0

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers(){
    let d = [];
    let trips = this.trips();
    let t;

    trips.forEach(function(trip) {
      t = store.drivers.find(function(driver){
        return driver.id === trip.driverId
      })
      d.push(t)
    })
    return d 
  }
}

let tripId = 0

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if(driver){
      this.driverId = driver.id
    }
    if (passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  passenger(){
    return store.passengers.find(function(passenger){

      return passenger.id
    })
  }

  driver(){
    return store.drivers.find(function(driver){
      return driver.id
    })
  }
}
