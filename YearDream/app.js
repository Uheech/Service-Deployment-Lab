let posts=[];

function renderPosts(){
    const postList=document.querySelector('#postList');
    postList.innerHTML='';

    posts.forEach((post,index) => {
        postList.innerHTML+=`
            <div class="card mb-2">
                <div class='card-body'>
                    <h5 class='card-title'>${post.title}</h5>
                    <p class='card-text'>${post.content}</p>
                    <button class='btn btn-danger btn-sm' data-index='${index}'>삭제</button>
                </div>
            </div>
        `;
    });
}


const form = document.querySelector('#postForm');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    posts.push({title, content});
    renderPosts();
    form.reset();
});

const postList = document.querySelector('#postList');

postList.addEventListener('click', (e)=>{
    if (e.target.tagName=== 'BUTTON'){
        const index = e.target.dataset.index;
        posts.splice(index,1);
        renderPosts();
    }
});

