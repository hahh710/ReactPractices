## Redux-React Practice

This application shows the list of songs with button
When the user clicks the button, then It shows the song detail of the selected song

### Redux-React

2 New Component

- Provider
- connect

#### provider

<Provider> has the higher of the hierarchy.
it contains the redux States (store)

To implement,
ReactDOM.render(
<Provider store={createStore(reducers)}>
<App />
</Provider>,
document.querySelector("#root")
);

#### Connect

Connect function asks the provider for the redux states
and convert the state to Props of the component.

##### Connect(mapStateToProps, {actionCreator})(Component)

const mapStateToProps = (state) =>{
return {song : state.selectedSong}
}
mapStateToProps is the function that filters the state,only we need and converts filtered states to props of the component

#### {actionCretor}

When we need to use the reducer, needs to specify into connect() function.
and then that reducer function becomes an element of the props.
to use it  
 <button onclick={props.actioncreator}>
