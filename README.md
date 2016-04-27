# react-redux-form add/remove

I finally got time to put in place a small project in order to illustrate the
problem I'm facing with the add/remove scenario.

In my case, this is a showstopper because I'm building a multi-step form
and I'm disabling the next button if the current form reducer is invalid.

## The usual suspects commands

1. `npm install`
2. `npm start`

## Steps to reproduce my issue

1. Create a new Todo item
2. Clear its content
3. Remove it

And now I'm left with an 'invalid' form reducer.

Is there an easy way to make it work as expected?

> Note: The hot reload thingy is broken for stateless components but that
  should still be ok, right? :)

  Thank you! 🙏🏻
