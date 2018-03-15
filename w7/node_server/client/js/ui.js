const uiSelectors = {
    canvas : '.row'
}

export const displayData = (obj) => {
    obj.forEach((post) => {
        $(uiSelectors.canvas).append($(`<div class="col s12 m12">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${post.title}</span>
            <p>${post.lead}</p>
          </div>
        </div>
      </div>`));
    })
}