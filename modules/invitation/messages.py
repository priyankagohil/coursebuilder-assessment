# Copyright 2015 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Messages used the invitation module."""

__author__ = [
    'johncox@google.com (John Cox)',
]


ALLOW_INVITATION = """
If checked, students will be able to send emails through the system to invite
others to the course.
"""

INVITATION_BODY = """
Enter the text for the body of the invitation email.
Use the string {{sender_name}} to include the name of the student
issuing the invitation.
"""
