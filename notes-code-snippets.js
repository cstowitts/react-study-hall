/** 1) wtf are keys for? */
puppies.map(puppyData=> <Puppy name={puppyData.name} key={puppyData.id} breed={pd.breed} />);

//from perspective of the puppy component, in that obj of props passed in, it's not gonna be given the key--not passed as prop to component

//you also want to make sure the key is made on the thing that the loop makes

puppies.map(puppyData=> 
    <div>
    <Puppy name={puppyData.name} key={puppyData.id} breed={pd.breed}/>
    </div>
)
//now this is wrong, key should be on the div!

puppies.map(puppyData=> 
    <div key={puppyData.id}>
    <Puppy name={puppyData.name} breed={puppyData.breed}/>
    </div>
)
//now better

class SerialNumberGenerator {
    constructor() {
        this.id = 0;
    }
    next() {
        return this.id++;
    }
}

let puppySerials = new SerialNumberGenerator;
//now when you make a new puppy, you can call this to make a unique key

let puppyId = uuid();
//or uuid

function PuppyList ({puppies}) {

    return (puppies.map(puppyData=> 
        <Puppy name={puppyData.name} 
            key={uuid()} //looks right, right?
            breed={puppyData.breed}/>)
    )
}

//every time you re-render this, there will be a NEW id for each puppy!!!!
//each one will be unique BUT NOT STABLE

//add the uuid at creation
function PuppyApp() {
    
    addPuppy(puppyToAdd){
        let id = uuid();
        setState() //blah blah blah
    }
}

function PuppyList ({puppies}) {

    return (puppies.map(puppyData=> 
        <Puppy name={puppyData.name} 
            key={puppyData.id} 
            //now when you re-render you'll be grabbing a stable id/key specific to the puppy
            breed={puppyData.breed}/>
    ))
    
    }

//////////////////////////////////////////////

/** 
7)Mocking a fn, testing something small, like EditableTodo
 */

describe("EditableTodo Tests", function(){

    it("delete button should call delete", function() {
        const removeMock = jest.fn();
        //we don't have the real delete fn, no state
        removeMock.mockClear();
        //this is helpful to make sure that the count of the fired click is only once, esp if additional tests are written

        const result = render(<EditableTodo todo={todo} remove={removeMock}/>);

        const delBtn = result.container.querySelector(".EditableTodo-delBtn");
        fireEvent(delBtn, "click");
        
        expect(removeMock).toHaveBeenCalledTimes(1);
        //you can test if it's been called once, should only fire once if delBtn is clicked once

        expect(result.queryByText())
    });

    /**
     * do we need this test?/do we need to make sure this component works in isolation? (Maybe)
     * judgement call--it would be wise also to test the TodoApp to make sure deletion truly occurs
     */

});

///////////////////////////////////////////

/** 4)getByAltText/Testing Library vc querySelector
*/

describe("EditableTodo Tests", function(){

    it("delete button should call delete", function() {


        const result = render(<EditableTodo todo={todo} remove={removeMock}/>);

        const delBtn = result.container.querySelector(".EditableTodo-delBtn");
  
        //or

        const {result} = render(<EditableTodo todo={todo} remove={removeMock}/>);

        const delBtn = result.querySelector(".EditableTodo-delBtn");
    });

    /**
     * do we need this test?/do we need to make sure this component works in isolation? (Maybe)
     * judgement call--it would be wise also to test the TodoApp to make sure deletion truly occurs
     */

});

////////////////////////////////////
/**TDD in React 
 * this kind of static representation can be really helpful as a sort of placeholder
 * and also to prevent you from getting too attached to code once you've taken the time to fully fill it out
*/

function Todo({taskName, taskDescription}){
    return(
        <div>
            <b>Wash Car</b>
            <i>it's nice</i>
        </div>
    )
}