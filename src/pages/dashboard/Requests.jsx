// /* eslint-disable no-unused-vars */
import { useState } from 'react'
import RequestCard from '@/components/dashboard/RequestCard'

const Requests = () => {

  const [requests, setRequests] = useState([
    {
      id: 1,
      type: 'open',
      title: 'Website Development',
      description: 'Develop a responsive e-commerce website that integrates a secure payment gateway, supports multiple languages, and includes advanced filtering options for products. The website should be optimized for mobile devices and have a user-friendly admin panel to manage orders, inventory, and customer inquiries efficiently.',
      startDate: '15 Nov',
      endDate: '10 Jan',
      amount: '$5000',
      clientName: 'Alice Johnson',
      clientMale: false,
    },
    {
      id: 2,
      type: 'open',
      title: 'Mobile App UI Design',
      description: 'Design an intuitive, aesthetically pleasing user interface for a social media app focused on connecting local communities. The design should include unique icons, color schemes, and animations that enhance user engagement. A key feature is the creation of interactive, customizable profiles that encourage user participation and retention.',
      startDate: '20 Nov',
      endDate: '15 Dec',
      amount: '$2000',
      clientName: 'Bob Smith',
      clientMale: true,
    },
    {
      id: 3,
      type: 'open',
      title: 'SEO Optimization',
      description: 'Enhance website SEO to boost visibility and ranking on major search engines, with a focus on keyword analysis, content optimization, and link-building strategies. Conduct regular audits to identify and fix any issues that may hinder SEO performance and provide monthly reports on improvements and traffic statistics.',
      startDate: '1 Dec',
      endDate: '1 Jan',
      amount: '$1200',
      clientName: 'Cathy Nguyen',
      clientMale: false,
    },
    {
      id: 4,
      type: 'progress',
      title: 'Marketing Campaign',
      description: 'Develop and manage a comprehensive digital marketing campaign for a new product launch, utilizing social media, email, and influencer marketing channels. The campaign should focus on increasing brand awareness, driving traffic to the website, and generating leads. Track campaign performance and optimize strategies in real time.',
      startDate: '10 Oct',
      endDate: '30 Dec',
      amount: '$3000',
      clientName: 'David Lee',
      clientMale: true,
    },
    {
      id: 5,
      type: 'progress',
      title: 'Data Analysis',
      description: 'Analyze data collected from multiple surveys to extract actionable insights. Prepare a detailed report covering trends, anomalies, and correlations within the data. Provide recommendations for improving future data collection and leveraging these findings to better inform strategic decisions in targeted areas.',
      startDate: '1 Nov',
      endDate: '30 Nov',
      amount: '$1800',
      clientName: 'Eva Green',
      clientMale: false,
    },
    {
      id: 6,
      type: 'completed',
      title: 'Logo Design',
      description: 'Design a modern, eye-catching logo for a tech startup focused on sustainability. The logo should be versatile enough for use across digital and print media, capturing the brand’s commitment to eco-friendly practices. Provide several variations to be used in different contexts and applications.',
      startDate: '1 Sep',
      endDate: '10 Sep',
      amount: '$500',
      clientName: 'Frank Thomas',
      clientMale: true,
    },
    {
      id: 7,
      type: 'completed',
      title: 'Content Writing',
      description: 'Create engaging, SEO-optimized articles for a travel blog. Topics cover travel guides, destination reviews, and cultural insights. Each article should provide valuable information while maintaining a conversational tone that encourages readers to explore new destinations. Adhere to deadlines and ensure high-quality, error-free content.',
      startDate: '15 Aug',
      endDate: '30 Aug',
      amount: '$750',
      clientName: 'Gina Adams',
      clientMale: false,
    },
    {
      id: 8,
      type: 'completed',
      title: 'Social Media Management',
      description: 'Manage multiple social media accounts to increase brand engagement and follower growth. Develop content strategies, schedule posts, and interact with followers to foster a loyal online community. Track engagement metrics and adjust strategies to maximize reach and align with brand goals.',
      startDate: '1 Jul',
      endDate: '1 Aug',
      amount: '$1500',
      clientName: 'Henry White',
      clientMale: true,
    },
  ]);

  const [activeFilter, setActiveFilter] = useState('open');

  const handleAccept = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, type: 'progress' } : request
      )
    );
  };

  const filteredRequests = requests.filter(request => request.type === activeFilter);

  return (
    <>
      <div className="w-full h-full p-4 flex flex-col gap-10">
        {/* Filter Buttons */}
        <div className="flex gap-2 p-1 rounded-lg max-w-fit border border-black">
          {['open', 'progress', 'completed'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`py-1 px-2 font-medium rounded-lg ${activeFilter === filter ? 'bg-black text-white' : 'hover:bg-lightBlack hover:text-white'
                }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Request Cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* {filteredRequests.map((request) => (
            <RequestCard
              key={request.id}
              type={request.type}
              onAccept={() => handleAccept(request.id)}
            />
          ))} */}
          {filteredRequests.map((request) => (
            <RequestCard
              key={request.id}
              type={request.type}
              title={request.title}
              description={request.description}
              startDate={request.startDate}
              endDate={request.endDate}
              amount={request.amount}
              clientName={request.clientName}
              clientMale={request.clientMale}
              onAccept={() => handleAccept(request.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Requests;

