'use client';

import { useState } from 'react';
import { 
  Users, 
  Activity, 
  Shield, 
  Target,
  TrendingUp,
  TrendingDown,
  Eye,
  Download,
  Flag,
  Award,
  Zap,
  Heart,
  Brain,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  AlertCircle,
  Filter,
  Search,
  Bell,
  Settings
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ScatterChart,
  Scatter
} from 'recharts';

// Mock data for India's defense talent
const nationalTalentStats = {
  totalAspirints: 687420,
  activeUsers: 543210,
  completedAssessments: 456789,
  eligibleCandidates: 234567,
  topPerformers: 12456,
  monthlyGrowth: 18.5
};

const regionalData = [
  { state: 'Uttar Pradesh', aspirants: 98765, qualified: 8234, percentage: 83.4, trend: 'up' },
  { state: 'Bihar', aspirants: 87654, qualified: 7456, percentage: 85.1, trend: 'up' },
  { state: 'Rajasthan', aspirants: 76543, qualified: 6789, percentage: 88.7, trend: 'up' },
  { state: 'Madhya Pradesh', aspirants: 65432, qualified: 5678, percentage: 86.8, trend: 'up' },
  { state: 'Maharashtra', aspirants: 54321, qualified: 4567, percentage: 84.2, trend: 'up' },
  { state: 'Punjab', aspirants: 43210, qualified: 3890, percentage: 90.1, trend: 'up' },
  { state: 'Haryana', aspirants: 38765, qualified: 3456, percentage: 89.2, trend: 'up' },
  { state: 'Gujarat', aspirants: 32109, qualified: 2876, percentage: 89.6, trend: 'up' }
];

const performanceMetrics = [
  { month: 'Jan 2025', academic: 78, physical: 82, interview: 75, overall: 78 },
  { month: 'Feb 2025', academic: 80, physical: 84, interview: 77, overall: 80 },
  { month: 'Mar 2025', academic: 82, physical: 86, interview: 79, overall: 82 },
  { month: 'Apr 2025', academic: 85, physical: 88, interview: 81, overall: 85 },
  { month: 'May 2025', academic: 87, physical: 90, interview: 83, overall: 87 },
  { month: 'Jun 2025', academic: 89, physical: 92, interview: 85, overall: 89 },
  { month: 'Jul 2025', academic: 91, physical: 94, interview: 87, overall: 91 },
  { month: 'Aug 2025', academic: 93, physical: 96, interview: 89, overall: 93 },
  { month: 'Sep 2025', academic: 95, physical: 98, interview: 91, overall: 95 }
];

const topTalents = [
  {
    id: 1,
    name: 'Arjun Kumar Singh',
    state: 'Bihar',
    age: 18,
    academicScore: 97,
    fitnessScore: 98,
    interviewScore: 96,
    overallScore: 97,
    specialization: 'Mathematics & Leadership',
    rank: 1,
    status: 'Recommended',
    avatar: '🏆'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    state: 'Rajasthan',
    age: 17,
    academicScore: 96,
    fitnessScore: 95,
    interviewScore: 97,
    overallScore: 96,
    specialization: 'Strategic Thinking',
    rank: 2,
    status: 'Recommended',
    avatar: '⭐'
  },
  {
    id: 3,
    name: 'Vikram Patel',
    state: 'Gujarat',
    age: 18,
    academicScore: 95,
    fitnessScore: 97,
    interviewScore: 94,
    overallScore: 95,
    specialization: 'Physical Excellence',
    rank: 3,
    status: 'Recommended',
    avatar: '💪'
  },
  {
    id: 4,
    name: 'Kavya Reddy',
    state: 'Andhra Pradesh',
    age: 17,
    academicScore: 94,
    fitnessScore: 93,
    interviewScore: 96,
    overallScore: 94,
    specialization: 'Communication & Strategy',
    rank: 4,
    status: 'Under Review',
    avatar: '🎯'
  },
  {
    id: 5,
    name: 'Rohit Yadav',
    state: 'Haryana',
    age: 18,
    academicScore: 93,
    fitnessScore: 96,
    interviewScore: 93,
    overallScore: 94,
    specialization: 'Defense Technology',
    rank: 5,
    status: 'Under Review',
    avatar: '⚡'
  }
];

const assessmentCategories = [
  { name: 'Academic Excellence', value: 35, color: '#3b82f6' },
  { name: 'Physical Fitness', value: 30, color: '#10b981' },
  { name: 'Leadership Skills', value: 20, color: '#f59e0b' },
  { name: 'Interview Performance', value: 15, color: '#ef4444' }
];

const TalentScatterData = [
  { academic: 95, fitness: 98, name: 'Arjun Kumar', state: 'Bihar' },
  { academic: 96, fitness: 95, name: 'Priya Sharma', state: 'Rajasthan' },
  { academic: 95, fitness: 97, name: 'Vikram Patel', state: 'Gujarat' },
  { academic: 94, fitness: 93, name: 'Kavya Reddy', state: 'AP' },
  { academic: 93, fitness: 96, name: 'Rohit Yadav', state: 'Haryana' },
  { academic: 92, fitness: 94, name: 'Anjali Singh', state: 'UP' },
  { academic: 91, fitness: 92, name: 'Kiran Joshi', state: 'Uttarakhand' },
  { academic: 90, fitness: 95, name: 'Deepak Kumar', state: 'Punjab' }
];

export default function ArmyDashboard() {
  const [selectedState, setSelectedState] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 via-blue-800 to-gray-800 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center text-2xl">
                🇮🇳
              </div>
              <div>
                <h1 className="text-3xl font-bold">ARYA Dashboard</h1>
                <p className="text-green-200">Army Recruitment & Youth Assessment Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-orange-500 text-white">
                <Flag className="w-4 h-4 mr-1" />
                India&apos;s Defense Talent Hub
              </Badge>
              <Button variant="outline" size="sm" className="text-white border-white">
                <Bell className="w-4 h-4 mr-2" />
                Alerts
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* National Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <Card className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Users className="w-6 h-6 mr-3" />
                Total Aspirants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">6,87,420</div>
              <div className="flex items-center text-blue-100">
                <TrendingUp className="w-4 h-4 mr-1" />
                +18.5% this month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Shield className="w-5 h-5 mr-2" />
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">5,43,210</div>
              <div className="text-green-100 text-sm">79% engagement</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Target className="w-5 h-5 mr-2" />
                Qualified
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">2,34,567</div>
              <div className="text-orange-100 text-sm">34% pass rate</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Award className="w-5 h-5 mr-2" />
                Top Talents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">12,456</div>
              <div className="text-purple-100 text-sm">Excellence tier</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Zap className="w-5 h-5 mr-2" />
                Ready for NDA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">8,945</div>
              <div className="text-red-100 text-sm">Immediate deployment</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-lg">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="talent-pool" className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>Top Talents</span>
            </TabsTrigger>
            <TabsTrigger value="regional" className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Regional Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center space-x-2">
              <Brain className="w-4 h-4" />
              <span>Performance</span>
            </TabsTrigger>
            <TabsTrigger value="recruitment" className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Recruitment</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Performance Trends */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    National Performance Trends
                  </CardTitle>
                  <CardDescription>Academic, Physical & Interview performance across India</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="academic" stroke="#3b82f6" strokeWidth={3} name="Academic" />
                      <Line type="monotone" dataKey="physical" stroke="#10b981" strokeWidth={3} name="Physical" />
                      <Line type="monotone" dataKey="interview" stroke="#f59e0b" strokeWidth={3} name="Interview" />
                      <Line type="monotone" dataKey="overall" stroke="#ef4444" strokeWidth={4} name="Overall" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Assessment Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-blue-600" />
                    Assessment Focus
                  </CardTitle>
                  <CardDescription>Weightage distribution in evaluation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={assessmentCategories}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {assessmentCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Excellence vs Fitness Scatter Plot */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-purple-600" />
                  Talent Mapping: Academic Excellence vs Physical Fitness
                </CardTitle>
                <CardDescription>Top performers plotted by academic scores and fitness levels</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ScatterChart data={TalentScatterData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="academic" name="Academic Score" unit="%" domain={[85, 100]} />
                    <YAxis type="number" dataKey="fitness" name="Fitness Score" unit="%" domain={[90, 100]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white p-3 border rounded shadow-lg">
                              <p className="font-semibold">{data.name}</p>
                              <p className="text-sm text-gray-600">State: {data.state}</p>
                              <p className="text-sm">Academic: {data.academic}%</p>
                              <p className="text-sm">Fitness: {data.fitness}%</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Scatter name="Candidates" dataKey="fitness" fill="#8b5cf6" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Top Talents Tab */}
          <TabsContent value="talent-pool" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">India&apos;s Defense Talent Pool</h2>
              <div className="flex space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search talents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    <SelectItem value="up">Uttar Pradesh</SelectItem>
                    <SelectItem value="bihar">Bihar</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="mp">Madhya Pradesh</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {topTalents.map((talent) => (
                <Card key={talent.id} className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                          {talent.avatar}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-xl font-bold text-gray-900">{talent.name}</h3>
                            <Badge variant="outline" className="bg-gold-100 text-gold-800 border-gold-300">
                              Rank #{talent.rank}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {talent.state}
                            </span>
                            <span>{talent.age} years old</span>
                            <span className="flex items-center font-medium text-blue-600">
                              <Star className="w-4 h-4 mr-1" />
                              {talent.specialization}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{talent.overallScore}%</div>
                          <div className="text-sm text-gray-500">Overall Score</div>
                        </div>
                        <Badge 
                          variant={talent.status === 'Recommended' ? 'default' : 'secondary'}
                          className={talent.status === 'Recommended' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}
                        >
                          {talent.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{talent.academicScore}%</div>
                        <div className="text-sm text-gray-600">Academic</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{talent.fitnessScore}%</div>
                        <div className="text-sm text-gray-600">Fitness</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-lg font-bold text-orange-600">{talent.interviewScore}%</div>
                        <div className="text-sm text-gray-600">Interview</div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                      <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Recommend for NDA
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Regional Analysis Tab */}
          <TabsContent value="regional" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  State-wise Performance Analysis
                </CardTitle>
                <CardDescription>Regional distribution of defense aspirants and their performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalData.map((state, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{state.state}</h3>
                          <p className="text-sm text-gray-600">{state.aspirants.toLocaleString()} total aspirants</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{state.qualified.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">Qualified</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{state.percentage}%</div>
                          <div className="text-sm text-gray-500">Success Rate</div>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-green-600 ml-1">Growing</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Growth Trends</CardTitle>
                  <CardDescription>Tracking improvement in key areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={performanceMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="overall" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.8} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Categories</CardTitle>
                  <CardDescription>Comparative analysis across domains</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={performanceMetrics.slice(-6)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="academic" fill="#3b82f6" name="Academic" />
                      <Bar dataKey="physical" fill="#10b981" name="Physical" />
                      <Bar dataKey="interview" fill="#f59e0b" name="Interview" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Recruitment Tab */}
          <TabsContent value="recruitment" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Ready for Induction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">8,945</div>
                  <p className="text-green-100">Candidates meeting all criteria</p>
                  <Button variant="secondary" className="mt-4 w-full">
                    Generate Recruitment List
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Under Final Review
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">3,678</div>
                  <p className="text-yellow-100">Pending final assessment</p>
                  <Button variant="secondary" className="mt-4 w-full">
                    Review Pending Cases
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Merit List Generated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">2,156</div>
                  <p className="text-blue-100">Final selection completed</p>
                  <Button variant="secondary" className="mt-4 w-full">
                    Download Merit List
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recruitment Pipeline Status</CardTitle>
                <CardDescription>Track candidates through the selection process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium">Initial Application</span>
                    <span className="text-2xl font-bold text-blue-600">6,87,420</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">Eligibility Screening</span>
                    <span className="text-2xl font-bold text-green-600">4,56,789</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-medium">Assessment Completed</span>
                    <span className="text-2xl font-bold text-orange-600">2,34,567</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-medium">Interview Stage</span>
                    <span className="text-2xl font-bold text-purple-600">45,678</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                    <span className="font-medium">Final Selection</span>
                    <span className="text-2xl font-bold text-red-600">8,945</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}