import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import "./styles/routes/App.scss";

function App() {
  return (
    <main className="MainContainer">
      <Header>
        <Search
          options={[
            {
              title: "React",
              value: "react",
            },
            {
              title: "Vue",
              value: "vue",
            },
            {
              title: "Angular",
              value: "angular",
            },
          ]}
        />
      </Header>
    </main>
  );
}

export default App;
