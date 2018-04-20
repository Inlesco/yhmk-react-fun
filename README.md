# Yellow Hammock - REACT_IS_FUN! challenge.

Your goal is to set up a React application where users will be able to
edit book info (and create new books - it’d be a great extra feature!).

Once you’re done, make a Pull request on our repo and we’ll look through it right away.

## Brief

As a user, I want to create a book object and edit
previously provided info about it, so that my reading list can stay up
to date. The form should be split into three steps:

1.  Choose subject (one of the two).
2.  Depending on the selection in the first step, display a list of
    reading material. Choose one.
3.  When reading material chosen, display all the info that's available
    about the book in a form (meaning that the book info can be edited).

## Requirements

*   All steps should be visible on the screen and changeable at all times
    (when they are available -- step 1 when nothing is picked, step 1
    and 2 when step 1 is picked and step 1, 2 and 3 when step 2 is
    picked).

*.  FE stack requirements: React (ver. 16.0+) + Redux | MobX | any other app state management library + TS | Flow for type checking. Also, using stuff like ES7’s async/await or RxJS is very welcome. You can also use React-based material-ui beta.

### Suggested order of completion

This depends on how much time you were given to accomplish the task.
Ideally you would provide a solution for each of the outlined steps
unless they are marked as optional.

1.  Data fetching from the api.
2.  Form steps logic.
3.  (optional) Saving the data.
4.  (optional) Styling (minor for a 2-3 h challenge, but if you go at it hard, bonus points for you absolutely :)).

## API Usage

API can be launched using `npm start`. You will need to run `npm
install` once starting working on the project to install dependencies.

| Endpoint                     | Result                                              |
|------------------------------|-----------------------------------------------------|
| /books?subjects=fiction      | Lists all books that contain "Fiction" as a subject |
| /subjects                    | Lists all available subjects                        |

---

More info about API usage can be found at the [json-server
repo](https://github.com/typicode/json-server).
