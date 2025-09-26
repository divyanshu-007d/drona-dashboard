'use client';

import { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Eye, 
  Play,
  MoreHorizontal,
  Filter,
  Clock,
  User
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  DialogDescription,
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
import { flaggedSubmissions } from '@/data/mockData';
import { format } from 'date-fns';

const ReviewModal = ({ submission, isOpen, onClose, onReview }) => {
  if (!submission) return null;

  const handleApprove = () => {
    onReview(submission.id, 'approved');
    onClose();
  };

  const handleReject = () => {
    onReview(submission.id, 'rejected');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-red-500" />
            Review Flagged Submission
          </DialogTitle>
          <DialogDescription>
            Submission ID: {submission.id} - {submission.test} by {submission.athleteName}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          {/* Video Section */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Video Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Play className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Video Player</p>
                    <p className="text-xs text-gray-400">{submission.videoUrl}</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Play className="h-4 w-4 mr-2" />
                      Play Video
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Submission Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Athlete</label>
                    <p className="font-medium">{submission.athleteName}</p>
                    <p className="text-sm text-gray-500">{submission.athleteId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Test</label>
                    <p className="font-medium">{submission.test}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Score</label>
                    <p className="font-bold text-2xl text-blue-600">{submission.score}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Expected Range</label>
                    <p className="font-medium text-gray-700">{submission.expectedRange}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Location</label>
                  <p className="font-medium">{submission.location}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Submission Date</label>
                  <p className="font-medium">{format(new Date(submission.submissionDate), 'PPP')}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Flag Reason</label>
                  <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                    <p className="text-sm text-red-700">{submission.flagReason}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Priority</label>
                  <div className="mt-1">
                    <Badge variant={
                      submission.priority === 'high' ? 'destructive' : 
                      submission.priority === 'medium' ? 'default' : 'secondary'
                    }>
                      {submission.priority} priority
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Review Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="outline" onClick={handleReject} className="text-red-600 hover:text-red-700">
            <XCircle className="h-4 w-4 mr-2" />
            Reject
          </Button>
          <Button onClick={handleApprove} className="bg-green-600 hover:bg-green-700">
            <CheckCircle className="h-4 w-4 mr-2" />
            Approve
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function Verification() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [submissions, setSubmissions] = useState(flaggedSubmissions);

  const filteredSubmissions = submissions.filter(submission => {
    const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || submission.priority === priorityFilter;
    return matchesStatus && matchesPriority;
  });

  const handleReviewSubmission = (submission) => {
    setSelectedSubmission(submission);
    setIsReviewOpen(true);
  };

  const handleReview = (submissionId, newStatus) => {
    setSubmissions(prev => 
      prev.map(sub => 
        sub.id === submissionId 
          ? { ...sub, status: newStatus, reviewer: 'Current User' }
          : sub
      )
    );
  };

  const getStatusBadge = (status) => {
    const variants = {
      pending: { variant: 'secondary', color: 'text-yellow-600', icon: Clock },
      under_review: { variant: 'default', color: 'text-blue-600', icon: Eye },
      approved: { variant: 'default', color: 'text-green-600', icon: CheckCircle },
      rejected: { variant: 'destructive', color: 'text-red-600', icon: XCircle }
    };
    
    const config = variants[status] || variants.pending;
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {status.replace('_', ' ')}
      </Badge>
    );
  };

  const getPriorityBadge = (priority) => {
    const variants = {
      high: 'destructive',
      medium: 'default', 
      low: 'secondary'
    };
    
    return (
      <Badge variant={variants[priority]}>
        {priority}
      </Badge>
    );
  };

  const getStatusCounts = () => {
    const counts = submissions.reduce((acc, sub) => {
      acc[sub.status] = (acc[sub.status] || 0) + 1;
      return acc;
    }, {});
    
    return {
      pending: counts.pending || 0,
      under_review: counts.under_review || 0,
      approved: counts.approved || 0,
      rejected: counts.rejected || 0
    };
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Verification Queue</h1>
          <p className="text-gray-600 mt-1">Review and verify flagged aspirants submissions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Bulk Actions
          </Button>
        </div>
      </div>

      {/* Status Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-yellow-600">{statusCounts.pending}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Under Review</p>
                <p className="text-2xl font-bold text-blue-600">{statusCounts.under_review}</p>
              </div>
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-green-600">{statusCounts.approved}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-red-600">{statusCounts.rejected}</p>
              </div>
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="under_review">Under Review</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Submissions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Flagged Submissions ({filteredSubmissions.length})</CardTitle>
          <CardDescription>
            Review submissions that have been flagged for verification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Submission</TableHead>
                <TableHead>Athlete</TableHead>
                <TableHead>Test</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reviewer</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{submission.id}</p>
                      <p className="text-xs text-gray-500">
                        {format(new Date(submission.submissionDate), 'MMM dd, yyyy')}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{submission.athleteName}</p>
                      <p className="text-xs text-gray-500">{submission.athleteId}</p>
                    </div>
                  </TableCell>
                  <TableCell>{submission.test}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-bold text-lg">{submission.score}</p>
                      <p className="text-xs text-gray-500">Expected: {submission.expectedRange}</p>
                    </div>
                  </TableCell>
                  <TableCell>{getPriorityBadge(submission.priority)}</TableCell>
                  <TableCell>{getStatusBadge(submission.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {submission.reviewer ? (
                        <>
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{submission.reviewer}</span>
                        </>
                      ) : (
                        <span className="text-sm text-gray-400">Unassigned</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem 
                          onClick={() => handleReviewSubmission(submission)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Review Submission
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Quick Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <XCircle className="h-4 w-4 mr-2" />
                          Quick Reject
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

      {/* Review Modal */}
      <ReviewModal
        submission={selectedSubmission}
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onReview={handleReview}
      />
    </div>
  );
}