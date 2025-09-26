'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Flag, 
  MoreHorizontal,
  Calendar,
  MapPin,
  Award,
  Activity,
  Shield,
  Target,
  Star,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock data for defense aspirants
const defenseAspirantsData = [
  {
    id: 'DA001',
    name: 'Arjun Kumar Singh',
    age: 18,
    location: 'Patna, Bihar',
    academicScore: 97,
    fitnessScore: 98,
    interviewScore: 96,
    overallScore: 97,
    status: 'recommended',
    specialization: 'Mathematics & Leadership',
    lastActive: '2024-09-25',
    testsCompleted: 15,
    rank: 1
  },
  {
    id: 'DA002', 
    name: 'Priya Sharma',
    age: 17,
    location: 'Jaipur, Rajasthan',
    academicScore: 96,
    fitnessScore: 95,
    interviewScore: 97,
    overallScore: 96,
    status: 'recommended',
    specialization: 'Strategic Thinking',
    lastActive: '2024-09-25',
    testsCompleted: 18,
    rank: 2
  },
  {
    id: 'DA003',
    name: 'Vikram Patel',
    age: 18,
    location: 'Ahmedabad, Gujarat',
    academicScore: 95,
    fitnessScore: 97,
    interviewScore: 94,
    overallScore: 95,
    status: 'recommended',
    specialization: 'Physical Excellence',
    lastActive: '2024-09-24',
    testsCompleted: 12,
    rank: 3
  },
  {
    id: 'DA004',
    name: 'Kavya Reddy',
    age: 17,
    location: 'Hyderabad, Telangana',
    academicScore: 94,
    fitnessScore: 93,
    interviewScore: 96,
    overallScore: 94,
    status: 'under-review',
    specialization: 'Communication Skills',
    lastActive: '2024-09-25',
    testsCompleted: 14,
    rank: 4
  },
  {
    id: 'DA005',
    name: 'Rohit Yadav',
    age: 18,
    location: 'Gurugram, Haryana',
    academicScore: 93,
    fitnessScore: 96,
    interviewScore: 93,
    overallScore: 94,
    status: 'under-review',
    specialization: 'Defense Technology',
    lastActive: '2024-09-23',
    testsCompleted: 16,
    rank: 5
  },
  {
    id: 'DA006',
    name: 'Anjali Singh',
    age: 17,
    location: 'Lucknow, Uttar Pradesh',
    academicScore: 92,
    fitnessScore: 94,
    interviewScore: 92,
    overallScore: 93,
    status: 'active',
    specialization: 'Leadership Potential',
    lastActive: '2024-09-25',
    testsCompleted: 11,
    rank: 6
  }
];

const AspirantProfileModal = ({ aspirant, isOpen, onClose }) => {
  if (!aspirant) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="font-bold text-white">{aspirant.name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{aspirant.name}</h3>
              <p className="text-sm text-gray-500">ID: {aspirant.id} • Rank #{aspirant.rank}</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Age: {aspirant.age} years</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{aspirant.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Assessments: {aspirant.testsCompleted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{aspirant.specialization}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance Scores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Academic:</span>
                    <span className="font-bold text-blue-600">{aspirant.academicScore}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fitness:</span>
                    <span className="font-bold text-green-600">{aspirant.fitnessScore}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interview:</span>
                    <span className="font-bold text-orange-600">{aspirant.interviewScore}%</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Overall:</span>
                    <span className="font-bold text-lg text-green-600">{aspirant.overallScore}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function DefenseAspirants() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedAspirant, setSelectedAspirant] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const filteredAspirants = defenseAspirantsData.filter(aspirant => {
    const matchesSearch = aspirant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         aspirant.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         aspirant.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || aspirant.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleViewProfile = (aspirant) => {
    setSelectedAspirant(aspirant);
    setIsProfileOpen(true);
  };

  const getStatusBadge = (status) => {
    const variants = {
      'recommended': 'bg-green-500 text-white',
      'under-review': 'bg-yellow-500 text-white',
      'active': 'bg-blue-500 text-white'
    };
    
    const labels = {
      'recommended': 'Recommended',
      'under-review': 'Under Review',
      'active': 'Active'
    };

    return (
      <Badge className={variants[status] || 'bg-gray-500 text-white'}>
        {labels[status] || status}
      </Badge>
    );
  };

  const getScoreColor = (score) => {
    if (score >= 95) return 'text-green-600 font-bold';
    if (score >= 85) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-green-600" />
            Defense Aspirants Management
          </h1>
          <p className="text-gray-600 mt-1">Monitor and evaluate defense candidates for NDA recruitment</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, ID, or location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="under-review">Under Review</SelectItem>
                <SelectItem value="active">Active</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Aspirants Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-600" />
            Defense Aspirants ({filteredAspirants.length})
          </CardTitle>
          <CardDescription>
            Complete list of defense aspirants and their assessment data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Aspirant</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Academic</TableHead>
                <TableHead>Fitness</TableHead>
                <TableHead>Interview</TableHead>
                <TableHead>Overall</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAspirants.map((aspirant) => (
                <TableRow key={aspirant.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{aspirant.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium">{aspirant.name}</p>
                        <p className="text-sm text-gray-500">{aspirant.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{aspirant.age}</TableCell>
                  <TableCell>{aspirant.location}</TableCell>
                  <TableCell>
                    <span className={getScoreColor(aspirant.academicScore)}>
                      {aspirant.academicScore}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={getScoreColor(aspirant.fitnessScore)}>
                      {aspirant.fitnessScore}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={getScoreColor(aspirant.interviewScore)}>
                      {aspirant.interviewScore}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${getScoreColor(aspirant.overallScore)}`}>
                        {aspirant.overallScore}%
                      </span>
                      {aspirant.rank <= 5 && (
                        <Badge variant="outline" className="text-xs bg-yellow-100 text-yellow-800">
                          #{aspirant.rank}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(aspirant.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewProfile(aspirant)}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Recommend for NDA
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Flag className="h-4 w-4 mr-2" />
                          Flag for Review
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <AspirantProfileModal 
        aspirant={selectedAspirant}
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
}