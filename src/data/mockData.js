// Mock data for the SAI Dashboard

export const kpiData = [
  {
    title: "Total Aspirants",
    value: "15,420",
    change: "+12.5%",
    trend: "up",
    icon: "Users"
  },
  {
    title: "Tests Completed",
    value: "48,350",
    change: "+8.2%", 
    trend: "up",
    icon: "Activity"
  },
  {
    title: "Active Users",
    value: "3,240",
    change: "+15.3%",
    trend: "up", 
    icon: "UserCheck"
  },
  {
    title: "New This Week",
    value: "156",
    change: "-2.1%",
    trend: "down",
    icon: "UserPlus"
  }
];

export const athletesData = [
  {
    id: "ATH001",
    name: "Rahul Sharma", 
    age: 16,
    location: "Pune, Maharashtra",
    testsCompleted: 12,
    overallScore: 78.5,
    lastActive: "2024-09-16",
    status: "active",
    gender: "Male",
    recommendedSports: ["Cricket", "Hockey"],
    performanceData: [
      { test: "Push-ups", score: 22, date: "2024-09-16", maxScore: 30 },
      { test: "Sit-ups", score: 35, date: "2024-09-15", maxScore: 40 },
      { test: "40m Sprint", score: 6.2, date: "2024-09-14", maxScore: 5.0 },
      { test: "Long Jump", score: 4.2, date: "2024-09-13", maxScore: 5.0 },
    ]
  },
  {
    id: "ATH002",
    name: "Priya Patel",
    age: 17,
    location: "Ahmedabad, Gujarat",
    testsCompleted: 15,
    overallScore: 82.1,
    lastActive: "2024-09-17",
    status: "active",
    gender: "Female",
    recommendedSports: ["Badminton", "Tennis"],
    performanceData: [
      { test: "Push-ups", score: 18, date: "2024-09-17", maxScore: 25 },
      { test: "Sit-ups", score: 32, date: "2024-09-16", maxScore: 35 },
      { test: "40m Sprint", score: 6.8, date: "2024-09-15", maxScore: 5.5 },
      { test: "Flexibility", score: 25, date: "2024-09-14", maxScore: 30 },
    ]
  },
  {
    id: "ATH003",
    name: "Arjun Singh",
    age: 15,
    location: "Delhi, Delhi",
    testsCompleted: 8,
    overallScore: 65.3,
    lastActive: "2024-09-15",
    status: "inactive",
    gender: "Male",
    recommendedSports: ["Football", "Basketball"],
    performanceData: [
      { test: "Push-ups", score: 15, date: "2024-09-15", maxScore: 30 },
      { test: "Sit-ups", score: 28, date: "2024-09-14", maxScore: 40 },
      { test: "40m Sprint", score: 7.1, date: "2024-09-13", maxScore: 5.0 },
    ]
  },
  {
    id: "ATH004",
    name: "Meera Nair",
    age: 18,
    location: "Kochi, Kerala",
    testsCompleted: 18,
    overallScore: 91.2,
    lastActive: "2024-09-17",
    status: "active",
    gender: "Female",
    recommendedSports: ["Swimming", "Athletics"],
    performanceData: [
      { test: "Push-ups", score: 24, date: "2024-09-17", maxScore: 25 },
      { test: "Sit-ups", score: 38, date: "2024-09-16", maxScore: 35 },
      { test: "40m Sprint", score: 5.8, date: "2024-09-15", maxScore: 5.5 },
      { test: "Long Jump", score: 4.8, date: "2024-09-14", maxScore: 5.0 },
      { test: "Flexibility", score: 28, date: "2024-09-13", maxScore: 30 },
    ]
  },
  {
    id: "ATH005",
    name: "Vikram Reddy",
    age: 16,
    location: "Hyderabad, Telangana",
    testsCompleted: 10,
    overallScore: 73.8,
    lastActive: "2024-09-16",
    status: "active",
    gender: "Male",
    recommendedSports: ["Weightlifting", "Wrestling"],
    performanceData: [
      { test: "Push-ups", score: 28, date: "2024-09-16", maxScore: 30 },
      { test: "Sit-ups", score: 33, date: "2024-09-15", maxScore: 40 },
      { test: "40m Sprint", score: 6.5, date: "2024-09-14", maxScore: 5.0 },
    ]
  }
];

export const analyticsData = {
  monthlyRegistrations: [
    { month: 'Jan', count: 1200 },
    { month: 'Feb', count: 1400 },
    { month: 'Mar', count: 1100 },
    { month: 'Apr', count: 1800 },
    { month: 'May', count: 2100 },
    { month: 'Jun', count: 1900 },
    { month: 'Jul', count: 2300 },
    { month: 'Aug', count: 2000 },
    { month: 'Sep', count: 1750 }
  ],
  regionalData: [
    { state: 'Maharashtra', athletes: 2400, tests: 8500, performance: 78.5 },
    { state: 'Karnataka', athletes: 1800, tests: 6200, performance: 82.1 },
    { state: 'Tamil Nadu', athletes: 2100, tests: 7800, performance: 80.3 },
    { state: 'Gujarat', athletes: 1500, tests: 5100, performance: 75.8 },
    { state: 'Rajasthan', athletes: 1200, tests: 3900, performance: 71.2 },
    { state: 'Delhi', athletes: 900, tests: 3200, performance: 83.4 },
    { state: 'Kerala', athletes: 800, tests: 2800, performance: 85.1 },
    { state: 'Punjab', athletes: 1100, tests: 3600, performance: 74.9 }
  ],
  testDistribution: [
    { name: 'Strength', value: 35, color: '#1e40af' },
    { name: 'Endurance', value: 25, color: '#059669' },
    { name: 'Agility', value: 22, color: '#ea580c' },
    { name: 'Flexibility', value: 18, color: '#7c3aed' }
  ],
  performanceDistribution: [
    { range: '90-100', count: 456, percentage: 3.0 },
    { range: '80-89', count: 1234, percentage: 8.0 },
    { range: '70-79', count: 3456, percentage: 22.4 },
    { range: '60-69', count: 4567, percentage: 29.6 },
    { range: '50-59', count: 3890, percentage: 25.2 },
    { range: '40-49', count: 1456, percentage: 9.4 },
    { range: '30-39', count: 345, percentage: 2.2 },
    { range: '0-29', count: 16, percentage: 0.1 }
  ],
  ageDistribution: [
    { ageGroup: '12-14', male: 1200, female: 980 },
    { ageGroup: '15-16', male: 2100, female: 1850 },
    { ageGroup: '17-18', male: 1800, female: 1650 },
    { ageGroup: '19-21', male: 900, female: 840 }
  ]
};

export const flaggedSubmissions = [
  {
    id: "SUB001",
    athleteId: "ATH001", 
    athleteName: "Rahul Sharma",
    test: "Push-ups",
    score: 45,
    expectedRange: "15-25",
    flagReason: "Score significantly higher than previous attempts",
    priority: "high",
    submissionDate: "2024-09-16",
    status: "pending",
    reviewer: null,
    videoUrl: "/mock-videos/pushup-1.mp4",
    location: "Pune, Maharashtra"
  },
  {
    id: "SUB002",
    athleteId: "ATH003",
    athleteName: "Arjun Singh",
    test: "40m Sprint",
    score: 4.2,
    expectedRange: "6.5-7.5",
    flagReason: "Suspiciously fast time for age group",
    priority: "high",
    submissionDate: "2024-09-15",
    status: "under_review",
    reviewer: "Dr. Amit Sharma",
    videoUrl: "/mock-videos/sprint-1.mp4",
    location: "Delhi, Delhi"
  },
  {
    id: "SUB003",
    athleteId: "ATH002",
    athleteName: "Priya Patel",
    test: "Flexibility",
    score: 35,
    expectedRange: "20-30",
    flagReason: "Video quality issues - unclear measurement",
    priority: "medium",
    submissionDate: "2024-09-17",
    status: "pending",
    reviewer: null,
    videoUrl: "/mock-videos/flexibility-1.mp4",
    location: "Ahmedabad, Gujarat"
  },
  {
    id: "SUB004",
    athleteId: "ATH005",
    athleteName: "Vikram Reddy",
    test: "Sit-ups",
    score: 50,
    expectedRange: "25-35",
    flagReason: "Form appears incorrect in video",
    priority: "low",
    submissionDate: "2024-09-16",
    status: "approved",
    reviewer: "Ms. Sunita Rao",
    videoUrl: "/mock-videos/situps-1.mp4",
    location: "Hyderabad, Telangana"
  }
];

export const recentActivity = [
  {
    id: 1,
    type: "submission",
    athleteName: "Meera Nair",
    athleteId: "ATH004",
    action: "completed Push-ups test",
    score: "24/25",
    timestamp: "2024-09-17T10:30:00Z",
    status: "approved"
  },
  {
    id: 2,
    type: "flag",
    athleteName: "Rahul Sharma",
    athleteId: "ATH001",
    action: "submission flagged for review",
    test: "Push-ups",
    timestamp: "2024-09-16T15:45:00Z",
    status: "pending"
  },
  {
    id: 3,
    type: "registration",
    athleteName: "New Athlete",
    athleteId: "ATH006",
    action: "registered on platform",
    location: "Mumbai, Maharashtra",
    timestamp: "2024-09-16T09:15:00Z",
    status: "active"
  },
  {
    id: 4,
    type: "submission",
    athleteName: "Priya Patel",
    athleteId: "ATH002",
    action: "completed Flexibility test",
    score: "25/30",
    timestamp: "2024-09-15T14:20:00Z",
    status: "approved"
  }
];

export const adminUsers = [
  {
    id: "USR001",
    name: "Dr. Rajesh Kumar",
    email: "rajesh.kumar@army.gov.in",
    role: "Super Admin",
    department: "Sports Medicine",
    lastLogin: "2024-09-17T08:30:00Z",
    status: "active"
  },
  {
    id: "USR002", 
    name: "Ms. Sunita Rao",
    email: "sunita.rao@army.gov.in",
    role: "Reviewer",
    department: "Talent Assessment",
    lastLogin: "2024-09-16T16:45:00Z",
    status: "active"
  },
  {
    id: "USR003",
    name: "Dr. Amit Sharma",
    email: "amit.sharma@army.gov.in",
    role: "Regional Admin",
    department: "North Region",
    lastLogin: "2024-09-15T11:20:00Z",
    status: "active"
  }
];