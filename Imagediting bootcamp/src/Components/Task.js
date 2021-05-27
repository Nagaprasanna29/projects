import React from "react";
function Task(){
    return(
        <div class="container-fluid my-5">
      <div
        class="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar"
      >
        
        <div class="col-12 col-md-4">
          <div class="card shadow h-100">
            <div class="card-body">
              <h4 class="card-text">
                Task 1
              </h4>
              <p class="card-text text-secondary mb-0">Task 1 is about....</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card shadow h-100">
            <div class="card-body">
              <h4 class="card-text">
                Task 2
              </h4>
              <p class="card-text text-secondary mb-0">Task 2 is about....</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card shadow h-100">
            <div class="card-body">
              <h4 class="card-text">Task 3</h4>
              <p class="card-text text-secondary mb-0">Task 3 is about....</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card shadow h-100">
            <div class="card-body">
              <h4 class="card-text">
                Task 4
              </h4>
              <p class="card-text text-secondary mb-0">Task 4 is about....</p>
            </div>
          </div>
        </div>
    <div class="col-12 col-md-4">
          <div class="card shadow h-100">
            <div class="card-body">
              <h4 class="card-text">
                Task 5
              </h4>
              <p class="card-text text-secondary mb-0">Task 5 is about....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Task;