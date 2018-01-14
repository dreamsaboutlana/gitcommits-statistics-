import { SideBar } from './Sidebar';
import { Pages } from './Pages';


export const Main = () => (
  <div className="wrap">
    <SideBar />
    <Pages />
  </div>
);

/*
  // 'https://api.github.com/repos/facebook/react'
  //https://api.github.com/repos/angular/angular'
  //https://api.github.com/repos/vuejs/vue'

  getData = () => {
    fetch('https://api.github.com/repos/vuejs/vue/commits')
      .then(resp => resp.json())
      .then(console.log);
  };*/
