1)Wtf are keys for/how to use?
    +keys are for iterables
    +so React can better understand what each component is, so if one changes, React knows to re-render and update that component
    +it's how we dig info out of an obj
    +key like primary key in a db
        -cannot be null
        -must be unique
        -thing that doesn't change***
            *React really cares about this 
            *React wants to figure out the least amount of work 
    +the way you look something up by its identity
    +don't use the idx for a key UNLESS YOU KNOW IT'S STABLE; no reason not to use uuid() though??
        -uuid is a long string of letters and numbers, it's so big that the likelyhood that we will produce the same uuid is tiny, not just in your app but across all things that use uuid
    +or you could make your own serial generator class and call it 
    +you also want to make sure the key is made on the thing that the loop makes
    +if you ever 
    +whenever you return an iterable in React you need keys--it's not the .map(), it's when you return an array of things (even if the elements in the array are different components (like [puppy, cat, turtle]) it's the array so we need keys for each thing!!

////////////////////////////////////

2)Component libraries/on the job do companies have component libraries?/”storyboard”
    +companies often build large component libraries
        -dialog boxes, delete btns, this color red, this trash icon, things that will retain the company design aesthetic and brand consistently
    +Storybook is an app that creates a neat website for your library of components (works for React and others)
    +the value you bring as a swe is also the code at your disposal! Hold on to components you create. If you're making modular components then you can more easily use and adapt them when you need them. 
        -gist.github.com 

////////////////////////////////////

3)Debugging with React and debug toolbar for it
    +always turn on your devTools!!! 
    +DISABLE CACHE IN YER DEVTOOLS
        -only works WHEN DEVTOOLS OPEN; otherwise browser can cache!!
    +look in the console for any errors first
    +DON'T IGNORE THE RED ERRORS MY DUDE
        -should we be worried about the warnings and vulnerabilities that show up in the terminal when you npm install?
        -just bc create-react-app uses it, doesn't mean that it's faultless or ultra secure
        -realistically how much to care will depend on your company and their tolerance, data (what's the kind of data your app manages?), and reqs
    +look at the components tab of the debugger
        -you can click the second little box and arrow icon to find it in the React stack, similar to finding els 
    +it can't tell you what state it is--will keep them in the order you have them, will appear as State: [{...}, {...}]
        +you can't change props but you can change or delete state in the devTools, even add a new state?
    +can also see what renders what (rendered by)
    +components tab, cog in upper right: settings about debug tab
        -you can check "highlight updates when components render"
        -will show you any component(s) that just rendered in the page when/as something changes. super helpful!!!
        -will show as a colored box around the re-rendered component(s)
    +protip: first line of your component should be a console.log that logs that you've entered the component, here are the props, here is the state. OFTEN ADDRESSES A LOT OF BUGS
        -will also show each time something re-renders so you can feel more confident that a component has re-rendered
    +add debugger; to your component and look in your devTools at the Sources or Sources > Scope tabs (not like Express, React runs in browser so devTools on localHost is good)
        -be careful not to accidentally step into the React source code, just continue past it
        -you can see and change any variables
        -call stack likely to be less helpful

////////////////////////////////////

4)getByAltText/Testing Library vc querySelector
    +users don't search the DOM, they look for the text which is why the Testing Library does all these getByText
        -Testing Library feels that you have to do things from the perspective available to users, you're testing the DOM
    +Rithm perspective: it's great you can't reach inside and tweak the state (Testing Library view), but it's fine to find an img by an id or an input by its label
    
////////////////////////////////////

5)Finding good stuff for React/what to learn from
    +docs for React is pretty mediocre, the examples are outdated (all about class based components, not really how it's done these days). Docs not as opinionated as the library wants you to be.
    +beta docs are much better: beta.reactjs.org, esp THINKING IN REACT article (beta.reactjs.org/learn/thinking-in-react)
        -much more opinionated, uses hooks and fns 
        -much more accurate to how people use React these days
        -official, blessed by project


////////////////////////////////////


6)Component design example, good patterns
    +look at quality code
    +get code reviewed by more experienced devs
    +think about things and processes you know NOW, and practicing component design for it
        -component design for Twitter?
        -c.d. for a washing machine?
    +Snowman
        -status img component: images and how they change 
        -letter keyboard component: btns themselves could be components (lettersList could be passed to btn component)
    +components in React should often be PURE (try not to have 18 states in various components)
        -if you give same input, get same result, doesn't change other things/no side effects; PRESENTATIONAL
    
    +major downside to having form be part of the main TodoApp:
        -would re-render every Todo, alllllll the children of the Todo will re-render EVERYTIME A CHARACTER IS TYPED INTO THE FORM
    +good design: is EVERYTHING having to re-render when one part changes? Should that one component be separate?
    +break things down more than you think!

////////////////////////////////////


7)Mocking a fn, testing something small, like EditableTodo
    +EditableTodo 
        -delete happens in TodoApp, not here
        -it only renders a form or the todo
        -can't really test that it actually deleted a Todo
        -we can only test "did you call the fn I want you to call when I click the delete btn"

////////////////////////////////////

How to revert/recover the previous save of your Github?

    +Your branch is up to date with 'origin/main', implicitly up to date with Head--the most recent thing you added, points to main branch on remote Github repo 
    +in your git log, you can grab the git commit id
    +and git checkout the commit id and Head
    will point to the commit one before the most recent commit
    +like a time machine where it doesn't know that the most recent commit happened
    +to get back: git checkout main
! but it's a little finicky and fussy, corrupts space time continuum problem, RISKY TO TIME TRAVEL

    +just do it in GitHub
        -find the repo
        -click the little clock logo in the top right of your commit log
        -click the id number on the commit you wanna access
            # will show what the code looked like, the changes you had made
        -can also click the code icon to the right of the id button to see the repo's commit history at that time
        -easier to do here, then you can easily switch back to the main branch by clicking the little branch dropdown on the left of the repo commit history area

! BE CAREFUL WITH GIT RESET
    ! you can give it a git id
    ! omg our last commit was a colossal mistake, let's pretend it didn't happen
    ! but if you fixed a bug that took 12 hours to debug, now you've lost that
    ! if you reset locally, Github suddenly knows about things that didn't happen anymore, mismatch issues

////////////////////////////////////

Backend frameworks with React

    +Express and Flask are general purpose
    +generally an API backend (Express Jobly) instead of an html producing backend
        -Fast API 
    +Rithm SIS uses Django, renders template on backend
        -making it a single page app would make it slower and less helpful
        -but there is a Rithm API too

////////////////////////////////////

TDD in React

    +one of the best things to make React testable is to GET THINGS OUT OF REACT
        -test the rules for Blackjack in a file for BlackJack, not in React where the btns and stuff are rendered
    +writing tests first for components that are more logic-y is a good idea
        -TodoApp
    +for presentational components (Todo), you could write tests first that will fail with static vals placeholders in the component
        -and as you actually write the Todo component, tests will start to pass so you know it's doing what you envisioned

////////////////////////////////////

Tests for your tests?

+you don't wanna have abstraction in your tests---you want tests to be straightforward, keep em copy+pasty 
+each test should be able to stand on its own
+don't wanna have to learn about your meta-test-framework