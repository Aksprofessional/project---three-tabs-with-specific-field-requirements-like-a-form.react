import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import { useState } from "react";

export default TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "akshay",
    email: "akshay@gmail.com",
    age: "24",
    interest: ["coding", "music"],
    theme: "light",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div>
      <div className="tab-components">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="components"
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
    </div>
  );
};
