const container = document.getElementById('app')
    // console.log(container)

const content = React.createElement('div', {}, [
    React.createElement('h1', {}, 'heading'),
    React.createElement('p', {}, 'para1'),
    React.createElement('h2', {}, 'heading 2')
])

ReactDOM.render(content, container)