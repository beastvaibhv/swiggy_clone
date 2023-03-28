const heading1 = React.createElement(
    "h1",
    {id:"title",
     key:"title1"},
    "Heading 1");

const heading2 = React.createElement(
    "h2",
    {id:"title",
key: "title2"},
    "Hello World!");
const container = React.createElement(
    "div",
    {id:"container"},
    [heading1,heading2]);

const Heading = (
    <div>
        <h1 key ="heading1">
            this is heading from JSX
        </h1>
        <h1 key ="heading2">
            this is another heading from JSX

        </h1>
    </div>
);

const Heading1 = () =>( 
    <div>
        {Heading}
        
        <h1> This is heading from functional component </h1>
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading1/>); 