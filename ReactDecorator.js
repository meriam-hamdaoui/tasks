// 3.	How you use decorators in React? Give an example.

/**
 * Decorators in React help us to take an existing React Component (Class or Function) and modify it which allow us to add extra capabilities
 * Those capabilities will not mess with the existing codebase.
 * They may ovveride an existing function/class completley or just add extra logic to it
 */

/** example
 * the "log" function is the wrapper decorator of the original console.log()
 */

const logger = (message) => console.log(message);
// decorater the log function
const loggerDecorator = (logger) => {
  return (message) => {
    logger.call(this, message);
    console.log("message logged at:", new Date().toLocaleString());
  };
};

const decoratedLogger = loggerDecorator(logger);
