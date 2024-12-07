export default function CreatePost(){
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">게시글 작성</h1>
   
      <form>
        <input type="text" placeholder="제목을 입력하세요" className="w-full mb-4 p-2 border border-gray-300 rounded"></input>
        <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            작성 완료
          </button>
      </form>
    </div>
  );
}