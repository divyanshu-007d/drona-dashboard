'use client';

import { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Users, 
  Shield, 
  Database, 
  Bell,
  Save,
  Edit,
  Trash2,
  Plus,
  Eye,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { adminUsers } from '@/data/mockData';
import { format } from 'date-fns';

const UserManagement = () => {
  const [users, setUsers] = useState(adminUsers);
  
  const getRoleBadge = (role) => {
    const variants = {
      'Super Admin': 'destructive',
      'Regional Admin': 'default',
      'Reviewer': 'secondary'
    };
    
    return (
      <Badge variant={variants[role] || 'secondary'}>
        {role}
      </Badge>
    );
  };

  const getStatusBadge = (status) => {
    return (
      <Badge variant={status === 'active' ? 'default' : 'secondary'}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">User Management</h3>
          <p className="text-sm text-gray-600">Manage admin users and their permissions</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>
                    {format(new Date(user.lastLogin), 'MMM dd, yyyy HH:mm')}
                  </TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const SystemConfiguration = () => {
  const [config, setConfig] = useState({
    platformName: 'Drona Talent Assessment Platform',
    maxFileSize: '50',
    sessionTimeout: '30',
    autoApprovalThreshold: '75',
    flaggingThreshold: '90'
  });

  const handleConfigChange = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">System Configuration</h3>
          <p className="text-sm text-gray-600">Configure platform settings and parameters</p>
        </div>
        <Button size="sm">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>Basic platform configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Platform Name</label>
              <Input
                value={config.platformName}
                onChange={(e) => handleConfigChange('platformName', e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Max File Size (MB)</label>
              <Input
                type="number"
                value={config.maxFileSize}
                onChange={(e) => handleConfigChange('maxFileSize', e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Session Timeout (minutes)</label>
              <Input
                type="number"
                value={config.sessionTimeout}
                onChange={(e) => handleConfigChange('sessionTimeout', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Parameters</CardTitle>
            <CardDescription>Configure test scoring and validation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Auto-approval Threshold (%)</label>
              <Input
                type="number"
                value={config.autoApprovalThreshold}
                onChange={(e) => handleConfigChange('autoApprovalThreshold', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Scores below this threshold will be auto-flagged
              </p>
            </div>
            <div>
              <label className="text-sm font-medium">Flagging Threshold (%)</label>
              <Input
                type="number"
                value={config.flaggingThreshold}
                onChange={(e) => handleConfigChange('flaggingThreshold', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Scores above this threshold will be flagged as suspicious
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Regional Customizations</CardTitle>
          <CardDescription>State and region-specific settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Maharashtra', 'Karnataka', 'Tamil Nadu', 
              'Gujarat', 'Delhi', 'Kerala'
            ].map((state) => (
              <div key={state} className="p-4 border rounded-lg">
                <h4 className="font-medium mb-3">{state}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Language Support</span>
                    <Badge variant="outline">Hindi, English</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Regional Standards</span>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const AuditLogs = () => {
  const mockLogs = [
    {
      id: 1,
      action: 'User Login',
      user: 'Dr. Rajesh Kumar',
      timestamp: '2024-09-17T10:30:00Z',
      details: 'Successful login from IP 192.168.1.100',
      type: 'authentication'
    },
    {
      id: 2,
      action: 'Submission Approved',
      user: 'Ms. Sunita Rao',
      timestamp: '2024-09-17T10:15:00Z',
      details: 'Approved submission SUB001 for athlete ATH001',
      type: 'review'
    },
    {
      id: 3,
      action: 'Settings Changed',
      user: 'Dr. Rajesh Kumar',
      timestamp: '2024-09-17T09:45:00Z',
      details: 'Updated auto-approval threshold from 70% to 75%',
      type: 'system'
    },
    {
      id: 4,
      action: 'Data Export',
      user: 'Dr. Amit Sharma',
      timestamp: '2024-09-16T16:20:00Z',
      details: 'Exported athlete data for North Region',
      type: 'data'
    }
  ];

  const getLogIcon = (type) => {
    switch(type) {
      case 'authentication': return <Shield className="h-4 w-4 text-blue-600" />;
      case 'review': return <Eye className="h-4 w-4 text-green-600" />;
      case 'system': return <SettingsIcon className="h-4 w-4 text-purple-600" />;
      case 'data': return <Database className="h-4 w-4 text-orange-600" />;
      default: return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Audit Logs</h3>
          <p className="text-sm text-gray-600">System activity and user action logs</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="authentication">Authentication</SelectItem>
              <SelectItem value="review">Reviews</SelectItem>
              <SelectItem value="system">System</SelectItem>
              <SelectItem value="data">Data</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {mockLogs.map((log) => (
              <div key={log.id} className="flex items-start gap-3 p-4 border rounded-lg">
                {getLogIcon(log.type)}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{log.action}</h4>
                    <span className="text-sm text-gray-500">
                      {format(new Date(log.timestamp), 'MMM dd, HH:mm')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{log.details}</p>
                  <p className="text-xs text-gray-500">by {log.user}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default function Settings() {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings & Administration</h1>
          <p className="text-gray-600 mt-1">Manage platform settings, users, and system configuration</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <SettingsIcon className="h-4 w-4" />
            System
          </TabsTrigger>
          <TabsTrigger value="audit" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Audit
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <UserManagement />
        </TabsContent>

        <TabsContent value="system">
          <SystemConfiguration />
        </TabsContent>

        <TabsContent value="audit">
          <AuditLogs />
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure system alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">High Priority Flags</p>
                    <p className="text-sm text-gray-500">Get notified when high priority submissions are flagged</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Daily Reports</p>
                    <p className="text-sm text-gray-500">Receive daily summary reports via email</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">System Maintenance</p>
                    <p className="text-sm text-gray-500">Notifications about system updates and maintenance</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}