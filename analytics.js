Our company switches to data driven product development. To make this initiative work we need to design a reusable function capable of
collecting and delivering UI analytics to the backend server.

To get you started we created a small snippet of code which should explain how we intend to use that API function.

```js
// This is the example of component to be instrumented using the function
class Component {
  constructor() {
    // this is where the unction could be called for example
    sendAnalyticsEvent(event);
    setTimeout(this.init, 100);
  }
  init() {
    sendAnalyticsEvent(event);
  }
}
```

Your goal is to implement the sendAnalyticsEvent(event) API function.

```js
const sendAnalyticsEvent = ({ batchLimit = 10, delay = 1000 }) => {
  // TODO: add your code here
  // example event
  // {
  // "type": "pageView",
  // "data": {
  //   "userId": "abc123"
  // }

  const events = [];
  let timer;

  const callApi = (list = events, retry = false) => {
    const eventsList = [...list]; // clone event list

    if (!retry) {
      events.length = 0;
    }

    doRequest(eventsList)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      callApi(list, retry);
    });
  };

  return (event) => {
    events.push(event);
    clearTimeout(timer);

    if (events.length ==== batchLimit) {
      callApi(events);
    } else {
      timer = setTimout(() => { callApi(events); }, delay);
    }
  }
};
```

When using an API, you would need to POST those analytics events down to the backend. To get you started weâ€™ve developed a simple mock
template of the server API. Feel free to change this implementation.

```js
const doRequest = (events) => {
  return new Promise((resolve, reject) => {
    return resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({}),
    });
  });
};
```

Server returns 200 HTTP code and empty response when API worked fine.

const sendEventUI = sendAnalyticsEvent();

sendEventUI({type:'x'});
sendEventUI({type:'y'});
