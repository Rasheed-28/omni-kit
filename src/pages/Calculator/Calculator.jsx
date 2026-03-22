import './calculator.css'

export default function Calculator() {
  const button_set_1 = [
    { id: 11, title: "7" },
    { id: 12, title: "8" },
    { id: 13, title: "9" },
    { id: 14, title: "/" },
  ];
  const button_set_2 = [
    { id: 21, title: "4" },
    { id: 22, title: "5" },
    { id: 23, title: "6" },
    { id: 24, title: "*" },
  ];
  const button_set_3 = [
    { id: 31, title: "1" },
    { id: 32, title: "2" },
    { id: 33, title: "3" },
    { id: 34, title: "-" },
  ];
  const button_set_4 = [
    { id: 41, title: "0" },
    { id: 42, title: "00" },
    { id: 43, title: "." },
    { id: 44, title: "+" },
  ];
 
  const button_set_5 = [
    { id: 51, title: "=" },
    { id: 52, title: "DEL" },
    { id: 53, title: "AC" },
    { id: 54, title: "MOD" },
  ];
  return (
    <div>
      <div className="flex flex-row">
        <div>
          <input type="text" placeholder='0' className='text-right w-xl' />
        </div>
      </div>
      {/* Button Set 1 */}
      <div className="flex gap-10">
        {button_set_1.map((button1) => (
          <button
            key={button1.id}
            className="bg-gray-200 p-3 rounded hover:bg-gray-300 w-40 mt-10"
          >
            {button1.title}
          </button>
        ))}
      </div>

      {/* Button Set 2 */}
      <div className="flex gap-10">
        {button_set_2.map((button2) => (
          <button
            key={button2.id}
            className="bg-gray-200 p-3 rounded hover:bg-gray-300 w-40 mt-10"
          >
            {button2.title}
          </button>
        ))}
      </div>

      {/* Button Set 3 */}
      <div className="flex gap-10">
        {button_set_3.map((button3) => (
          <button
            key={button3.id}
            className="bg-gray-200 p-3 rounded hover:bg-gray-300 w-40 mt-10"
          >
            {button3.title}
          </button>
        ))}
      </div>

      {/* Button Set 4 */}
      <div className="flex gap-10">
        {button_set_4.map((button4) => (
          <button
            key={button4.id}
            className="bg-gray-200 p-3 rounded hover:bg-gray-300 w-40 mt-10"
          >
            {button4.title}
          </button>
        ))}
      </div>

      {/* Button Set 5 */}
      <div className="flex gap-10">
        {button_set_5.map((button5) => (
          <button
            key={button5.id}
            className="bg-gray-200 p-3 rounded hover:bg-gray-300 w-40 mt-10"
          >
            {button5.title}
          </button>
        ))}
      </div>
    </div>
  );
}
