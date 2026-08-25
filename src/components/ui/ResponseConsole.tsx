'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CheckCircle, Clock, Play, UserCheck, AlertCircle } from 'lucide-react';

export interface ConsoleTicket {
  id: string;
  name: string;
  major: 'Computer Information Systems' | 'Mathematics' | 'Biology' | 'Business';
  message: string;
  status: 'pending' | 'assigned' | 'resolved';
  timestamp: string;
  assignedMentor?: string;
}

// Predefined mock mentors based on major
const majorMentors = {
  'Computer Information Systems': 'Marcus Vance (CIS Major)',
  'Biology': 'Aaliyah Jones (Biology Major)',
  'Mathematics': 'Tariq Simmons (Mathematics Major)',
  'Business': 'Maya Lin (Business Major)',
};

// Initial mock tickets to populate the console
const initialTickets: ConsoleTicket[] = [
  {
    id: 't-1',
    name: 'Emily Watson',
    major: 'Biology',
    message: 'I am a high school senior interested in the pre-med track. Are there opportunities to shadow cancer research labs during my freshman year?',
    status: 'assigned',
    timestamp: '2 min ago',
    assignedMentor: 'Aaliyah Jones (Biology Major)',
  },
  {
    id: 't-2',
    name: 'Jacob Miller',
    major: 'Computer Information Systems',
    message: 'Can I join the Student Developer Alliance if I do not have prior programming experience in Python or Java?',
    status: 'pending',
    timestamp: '5 min ago',
  },
  {
    id: 't-3',
    name: 'Sarah Chen',
    major: 'Mathematics',
    message: 'Hello, I wanted to know what companies actively recruit mathematics students for quantitative data analyst summer internships.',
    status: 'resolved',
    timestamp: '15 min ago',
    assignedMentor: 'Tariq Simmons (Mathematics Major)',
  }
];

// Predefined list of random inquiries to simulate real-time incoming traffic
const incomingInquiryTemplates = [
  {
    name: 'Brian O\'Connor',
    major: 'Computer Information Systems' as const,
    message: 'Does the CIS program provide guidance for AWS Cloud Practitioner or CompTIA Security+ certifications?',
  },
  {
    name: 'Chloe Tremblay',
    major: 'Biology' as const,
    message: 'Is it possible to co-author laboratory research papers with biology faculty as an undergraduate student?',
  },
  {
    name: 'Daniel Kim',
    major: 'Mathematics' as const,
    message: 'How is the preparation for actuarial exams structured within the mathematics program?',
  },
  {
    name: 'Elena Rostova',
    major: 'Business' as const,
    message: 'Are there any seed funding opportunities for students participating in the annual business plan competition?',
  }
];

interface ResponseConsoleProps {
  userTickets: Omit<ConsoleTicket, 'id' | 'status' | 'timestamp'>[];
}

export default function ResponseConsole({ userTickets }: ResponseConsoleProps) {
  const [tickets, setTickets] = useState<ConsoleTicket[]>(initialTickets);
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'assigned' | 'resolved'>('all');
  const [assigningId, setAssigningId] = useState<string | null>(null);
  
  // Stats
  const [stats, setStats] = useState({
    totalCount: 18,
    responseTime: 4.2,
    responseRate: 98.7,
  });

  // Track ticket ids that we have already added from userTickets to avoid duplicates
  const processedUserTicketRefs = useRef<string[]>([]);

  // Monitor userTickets prop and inject submitted inquiries in real-time
  useEffect(() => {
    if (userTickets.length > 0) {
      const latestUserTicket = userTickets[userTickets.length - 1];
      const ticketSignature = `${latestUserTicket.name}-${latestUserTicket.major}-${latestUserTicket.message.substring(0, 10)}`;
      
      if (!processedUserTicketRefs.current.includes(ticketSignature)) {
        processedUserTicketRefs.current.push(ticketSignature);
        
        // Add new ticket from form submission
        const newTicket: ConsoleTicket = {
          id: `t-user-${Date.now()}`,
          name: latestUserTicket.name,
          major: latestUserTicket.major,
          message: latestUserTicket.message,
          status: 'pending',
          timestamp: 'Just now',
        };

        setTickets((prev) => [newTicket, ...prev]);
        setStats((prev) => ({
          ...prev,
          totalCount: prev.totalCount + 1,
        }));
      }
    }
  }, [userTickets]);

  // Simulate periodic incoming inquiries
  useEffect(() => {
    const interval = setInterval(() => {
      // 30% chance to add a random ticket every 20 seconds
      if (Math.random() > 0.7) {
        const template = incomingInquiryTemplates[Math.floor(Math.random() * incomingInquiryTemplates.length)];
        const newTicket: ConsoleTicket = {
          id: `t-sim-${Date.now()}`,
          name: template.name,
          major: template.major,
          message: template.message,
          status: 'pending',
          timestamp: 'Just now',
        };
        setTickets((prev) => [newTicket, ...prev]);
        setStats((prev) => ({
          ...prev,
          totalCount: prev.totalCount + 1,
        }));
      }
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  // Handle assigning a peer mentor to a ticket
  const handleAssignMentor = (id: string, major: ConsoleTicket['major']) => {
    setAssigningId(id);
    
    // Simulate lookup and assignment delay
    setTimeout(() => {
      setTickets((prev) =>
        prev.map((t) =>
          t.id === id
            ? {
                ...t,
                status: 'assigned',
                assignedMentor: majorMentors[major],
              }
            : t
        )
      );
      setAssigningId(null);
      
      // Slightly improve stats when action taken
      setStats((prev) => ({
        ...prev,
        responseTime: Math.max(2.8, parseFloat((prev.responseTime - 0.1).toFixed(1))),
        responseRate: Math.min(100, parseFloat((prev.responseRate + 0.1).toFixed(1))),
      }));
    }, 1000);
  };

  // Handle resolving a ticket
  const handleResolveTicket = (id: string) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status: 'resolved',
            }
          : t
      )
    );
  };

  const filteredTickets = tickets.filter((t) => {
    if (activeTab === 'all') return true;
    return t.status === activeTab;
  });

  return (
    <div className="w-full bg-[#0C0614] border border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white font-sans">
      
      {/* Console Header Bar */}
      <div className="bg-[#120725] border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
          </div>
          <h3 className="font-serif text-lg font-bold tracking-wide flex items-center gap-1.5">
            <Terminal className="h-4 w-4 text-purple-400" /> STEM Response Console
          </h3>
        </div>
        <span className="font-mono text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-purple-200">
          SIMULATOR ACTIVE
        </span>
      </div>

      {/* Telemetry Stats Bar */}
      <div className="grid grid-cols-3 divide-x divide-white/5 bg-[#07030E] border-b border-white/15 py-3.5 text-center">
        <div>
          <span className="font-mono text-[10px] uppercase text-gray-400 block tracking-wider">Total Received</span>
          <span className="font-serif text-xl sm:text-2xl font-black text-[#e3fc51] mt-0.5 inline-block">
            {stats.totalCount}
          </span>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase text-gray-400 block tracking-wider">Avg Response</span>
          <span className="font-serif text-xl sm:text-2xl font-black text-purple-300 mt-0.5 inline-block">
            {stats.responseTime}m
          </span>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase text-gray-400 block tracking-wider">Response Rate</span>
          <span className="font-serif text-xl sm:text-2xl font-black text-[#e3fc51] mt-0.5 inline-block">
            {stats.responseRate}%
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex bg-[#0C0614] border-b border-white/10 p-2.5 gap-1">
        {(['all', 'pending', 'assigned', 'resolved'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-grow rounded-lg py-2 text-center font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === tab
                ? 'bg-purple-600/35 border border-purple-500/40 text-white font-extrabold'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tickets Scroll View */}
      <div className="p-5 max-h-[380px] overflow-y-auto space-y-4 no-scrollbar min-h-[220px] bg-[#09030F] relative">
        <AnimatePresence initial={false}>
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className={`border rounded-2xl p-5 space-y-4 transition-colors ${
                  ticket.status === 'pending'
                    ? 'border-red-500/25 bg-red-950/10'
                    : ticket.status === 'assigned'
                    ? 'border-purple-500/25 bg-purple-950/10'
                    : 'border-white/5 bg-white/5 opacity-70'
                }`}
              >
                {/* Ticket Top Info */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-serif text-base font-extrabold text-white">{ticket.name}</h4>
                    <span className="font-mono text-[10px] font-bold text-purple-300 uppercase tracking-widest mt-1 block">
                      {ticket.major}
                    </span>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wide">
                    {ticket.status === 'pending' && (
                      <span className="flex items-center gap-1 text-red-400 bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/20">
                        <AlertCircle className="h-3.5 w-3.5 animate-pulse" /> PENDING
                      </span>
                    )}
                    {ticket.status === 'assigned' && (
                      <span className="flex items-center gap-1 text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
                        <UserCheck className="h-3.5 w-3.5" /> ASSIGNED
                      </span>
                    )}
                    {ticket.status === 'resolved' && (
                      <span className="flex items-center gap-1 text-gray-300 bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                        <CheckCircle className="h-3.5 w-3.5 text-lime-400" /> RESOLVED
                      </span>
                    )}
                    <span className="text-gray-500 font-normal normal-case ml-1.5">{ticket.timestamp}</span>
                  </div>
                </div>

                {/* Ticket Message */}
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  &ldquo;{ticket.message}&rdquo;
                </p>

                {/* Assignment Footer */}
                {ticket.status === 'pending' && (
                  <div className="pt-3 border-t border-white/5 flex justify-end">
                    <button
                      onClick={() => handleAssignMentor(ticket.id, ticket.major)}
                      disabled={assigningId !== null}
                      className="premium-btn text-xs font-mono font-extrabold uppercase tracking-widest text-[#0B051D] bg-gradient-to-r from-[#e3fc51] to-[#a8f013] px-4 py-2 rounded-lg cursor-pointer flex items-center gap-1.5 hover:scale-[1.02] disabled:opacity-50"
                    >
                      {assigningId === ticket.id ? (
                        <>
                          <Clock className="h-3.5 w-3.5 animate-spin" /> Routing...
                        </>
                      ) : (
                        <>
                          <Play className="h-3 w-3 fill-current ml-0.5" /> Assign Peer Mentor
                        </>
                      )}
                    </button>
                  </div>
                )}

                {ticket.status === 'assigned' && (
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-4 font-mono text-[11px]">
                    <span className="text-purple-200">
                      Mentor: <strong className="text-[#e3fc51]">{ticket.assignedMentor}</strong>
                    </span>
                    <button
                      onClick={() => handleResolveTicket(ticket.id)}
                      className="premium-btn text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-purple-900/30 border border-white/15 px-3 py-1.5 rounded-lg cursor-pointer flex items-center gap-1"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-lime-400" /> Mark Resolved
                    </button>
                  </div>
                )}

                {ticket.status === 'resolved' && ticket.assignedMentor && (
                  <div className="pt-3 border-t border-white/5 font-mono text-[11px] text-gray-400">
                    Handled by <strong className="text-gray-300">{ticket.assignedMentor}</strong>
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-gray-500 font-mono text-xs">
              <Terminal className="h-8 w-8 text-gray-600 mb-2.5 animate-pulse" />
              <span>No tickets in &ldquo;{activeTab}&rdquo; filter.</span>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Console Status Footer */}
      <div className="bg-[#07030E] px-6 py-3.5 border-t border-white/10 text-gray-400 font-mono text-[10px] flex justify-between items-center">
        <span className="flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
          SYSTEMS STAT: ONLINE
        </span>
        <span>PEER HELP DESK PORTAL v1.2</span>
      </div>
    </div>
  );
}
