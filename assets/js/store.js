// fork of https://github.com/jbreckmckye/trkl/tree/master
var computedTracker = [];

function Store(value) {
  var subscribers = [];

  var self = function (...args) {
    return args.length ? write(args[0]) : read();
  };

  var subscribe = (subscriber, immediate) => {
    if (!~subscribers.indexOf(subscriber)) {
      subscribers.push(subscriber);
    }
    if (immediate) {
      subscriber(value);
    }
  };

  self['subscribe'] = subscribe;

  self['unsubscribe'] = (subscriber) => {
    remove(subscribers, subscriber);
  };

  function write(newValue) {
    if (newValue === value && (value === null || typeof value !== 'object')) {
      return;
    }

    var oldValue = value;
    value = newValue;

    for (let i = subscribers.length - 1; i > -1; i--) {
      subscribers[i](value, oldValue);
    }
  }

  function read() {
    var runningComputation = computedTracker[computedTracker.length - 1];
    if (runningComputation) {
      subscribe(runningComputation);
    }
    return value;
  }

  return self;
}

Store['computed'] = (fn) => {
  var self = Store();

  function computation() {
    detectCircularity(computation);
    computedTracker.push(computation);
    var errors, result;
    try {
      result = fn();
    } catch (e) {
      errors = e;
    }
    computedTracker.pop();
    if (errors) {
      throw errors;
    }
    self(result);
  }

  computation();
  return self;
};

Store['from'] = (executor) => {
  var self = Store();
  executor(self);
  return self;
};

function detectCircularity(token) {
  if (computedTracker.indexOf(token) > -1) {
    throw Error('Circular computation');
  }
}

function remove(array, item) {
  var position = array.indexOf(item);
  if (position > -1) {
    array.splice(position, 1);
  }
}

export default Store;
