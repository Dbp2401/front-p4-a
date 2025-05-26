import type { Signal } from "@preact/signals";
import type Post from "../models/post.ts";
import PostComponent from "../components/Post.tsx";

interface HomeProps {
  isGrid: Signal<boolean>;
  posts: Post[];
}

export default function MainView({ isGrid, posts }: HomeProps) {
  return (
    <div className="main-view-container">
      <div className="view-toggle">
        <button
          type="button"
          className={`toggle-button ${isGrid.value ? "active" : ""}`}
          onClick={() => (isGrid.value = !isGrid.value)} //Faltaba el onClick
          title={isGrid.value
            ? "Cambiar a vista de lista"
            : "Cambiar a vista de cuadrícula"}
        >
          {isGrid.value ? "☰ Lista" : "⏹️ Cuadrícula"}
        </button>
        {/* {console.log("isGrid:", isGrid.value)} */}
      </div>

      <div
        className={`posts-container ${
          isGrid.value ? "grid-view" : "list-view"
        }`}
      >
        {posts.map((post) => (
          <PostComponent key={post._id} post={post} isGrid={isGrid.value} />
        ))}
      </div>
    </div>
  );
}
