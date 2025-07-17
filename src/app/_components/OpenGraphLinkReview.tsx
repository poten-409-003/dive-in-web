import { IoCheckmark } from "react-icons/io5";

interface OpenGraphPreviewProps {
  url: string;
  setUrl: (value: string) => void;
  onConfirm: () => void;
  onClose: () => void; 
}

export default function OpenGraphPreview({url, setUrl, onConfirm, onClose}: OpenGraphPreviewProps) {

return (
  <div 
  className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-4 pt-6 pb-10 border-t rounded-t-2xl transition-transform duration-300 translate-y-0`}
        style={{
          width: "100%",
          maxWidth: "48rem",
          boxShadow: "0 -1px 3px rgba(0, 0, 0, 0.05)"
        }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-600">
              링크 삽입
            </h3>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="text-gray-500 hover:text-gray-700"
              >
              <IoCheckmark className="w-6 h-6 text-gray-400 hover:text-blue-900" />
            </button>
          </div>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="링크 주소를 붙여넣어주세요"
          className="w-full p-2 border rounded-xl focus:outline-none border-gray-300"
          />
      </div>

);

}
