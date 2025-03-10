import React, { useState } from 'react';

const WorkspaceManager = ({
  workspaces,
  currentWorkspace,
  onWorkspaceChange,
  onWorkspaceCreate,
  onWorkspaceRename,
  onWorkspaceDelete
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState('');

  const handleCreateWorkspace = () => {
    if (newWorkspaceName.trim()) {
      onWorkspaceCreate(newWorkspaceName.trim());
      setNewWorkspaceName('');
      setIsCreating(false);
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 text-xs">
      <div className="flex items-center gap-2">
        <select
          value={currentWorkspace?.id || ''}
          onChange={(e) => onWorkspaceChange(e.target.value)}
          className="px-2 py-1 rounded border border-gray-200"
        >
          {workspaces.map(workspace => (
            <option key={workspace.id} value={workspace.id}>
              {workspace.name}
            </option>
          ))}
        </select>

        {isCreating ? (
          <div className="flex gap-1">
            <input
              type="text"
              value={newWorkspaceName}
              onChange={(e) => setNewWorkspaceName(e.target.value)}
              className="px-2 py-1 rounded border border-gray-200"
              placeholder="Workspace name"
            />
            <button
              onClick={handleCreateWorkspace}
              className="px-2 py-1 bg-blue-50 text-blue-600 rounded"
            >
              Create
            </button>
            <button
              onClick={() => setIsCreating(false)}
              className="px-2 py-1 bg-gray-50 text-gray-600 rounded"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsCreating(true)}
            className="px-2 py-1 bg-blue-50 text-blue-600 rounded"
          >
            New Workspace
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkspaceManager;