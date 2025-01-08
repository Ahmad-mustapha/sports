import React from 'react'

export function Numbersheading({ number, item }) {
  return (
    <div className='w-[14.5rem] bg-[F2F4F7] flex flex-col items-center space-y-2 bg-[#F2F4F7] px-[16px] py-[8px]'>
      <p className='text-[32px] text-[#FF7D01] font-[500]'>{number}</p>
      <p className='text-[14px] font-[500]'>{item}</p>
    </div>
  )
}


const Matches = () => {
  return (
    <div className="py-4 px-4">
      <div className="py-4 px-4 num">
        <div>
          <Numbersheading number={10} item="Tennis" />
        </div>
        <div>
          <Numbersheading number={12} item="Padel" />
        </div>
        <div>
          <Numbersheading number={12} item="Basketball" />
        </div>
        <div>
          <Numbersheading number={13} item="Football" />
        </div>
      </div>
      <div className="p-[1.3rem] flex-grow">
        <p className="font-[600] md:block text-[20px] mb-4">My matches</p>
        <table className="w-full text-left">
          <thead className="">
            <tr>
              <th className="sm:table-cell xl:px-14">ID</th>
              <th className="sm:table-cell xl:px-14">Name</th>
              <th className="sm:table-cell xl:px-14">Purchased for</th>
              <th className="sm:table-cell xl:px-14">Time remaining</th>
            </tr>
          </thead>
          <tbody>
            {/* {previousDomains.length > 0 ? (
              previousDomains.map((domain, index) => (
                <tr key={index} className="text-[14px] font-[500] text-[#2F2E3E]">
                  <td className="hidden sm:table-cell pl-0 md:pl-14">{domain.id}</td>
                  <td className="hidden sm:table-cell pl-0 md:pl-14">{domain.name}</td>
                  <td className="hidden sm:table-cell pl-0 md:pl-14">{domain.price}</td>
                  <td className="hidden sm:table-cell pl-0 md:pl-14">{domain.time_remaining.charAt(0).toUpperCase() + domain.time_remaining.slice(1)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  <div className="flex items-center justify-center min-h-[200px] bg-[#F9FAFB] lg:bg-transparent">
                    <div className="flex items-center justify-center flex-col mt-2 text-center">
                      <p className="font-[600] text-[16px] text-[#2F2E3E]">Start your search</p>
                      <p className="font-[500] text-[14px] text-[#5C5F84]">You have no domains. Start your domain search below</p>
                      <Link to="./Domainlist">
                        <p className="text-white bg-[#FF7D01] text-[12px] font-[600] py-[8px] px-[12px] mt-4 rounded-md">Search domain names!</p>
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Matches