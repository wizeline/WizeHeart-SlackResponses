const STATIC = {
  app: {
    //dev or prod - dev requires SOCKET MODE enabled in the Slack App. https://api.slack.com
    env: "prod" 
  },
  slack: {
    slackToken: 'xoxb-3809415109956-4069429621526-FmyRKn8AXSmn2JxXQp3DP62e',
    signingSecret: "9ab3281ff44db0b7eaf07877a3c1545e",
    appToken: "xapp-1-A0424TNBA85-4061397937047-1897b2a1539aeff70406d5f0fb34df1f7c87b6446e95640d0475f9ef73dc852c"
  },
  googleSheet:{
    credentials : {
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDYnhlyaY4ryYAf\nL2KtGn/wvbKLvoAGKQcMeSvVA8znmEzSj2NjMP2Qj6g9xNrqcsL8Uc9yBfutW5gl\nxjXs5vCBxkJnNJApoGpcYbPfy51dUALQF2y5cVrIw7hEctyal9RjKX8cHA13mUe4\nekeP52grsynL5gnc+d0z148mIc874Y78xNax2TAGx6o9DwCIdMIzIjUcQtom7vQV\nTjQ2+3dg09q2QwEI3UHu2d/uF9zeRN/jtxdRv+qJHIAjdldaQtCp4qMJcXSP8JFx\ntEGQYW6PJYQkJRLan2xIQr4yNhZu7DOF33XGBpfno8oowb7yEYCFC5SE/zE8m2ox\nEg/+uVO/AgMBAAECggEADLyjF2igfO+gsnS5Ux9bRX8J+BCP+4y/Bts7Gg/apQV+\nAuV+fQ8c4bqotFUWYDG2SFrRHU2/wi5AEHyKoC7mFmNfdS0QivoNNvhhuLeCvcFe\nIPk3oeHJ6kMj2xZ75TUnPltqx27Y1d7z6iN6gLolFGi4/O2+R7mDabBzkNTtGAKs\nA2oI1a+ZawQxN/9fv/ju29HiNRsKtT40gdU1SrF+rnvDYFKi4klNhSnAcTGQaLQ/\ns1TeL0m5og8KYebY+m6YsP1yE1bQVlNiECHREVVqurCdbQDa2fFdMaudJECCr4dE\nAo0qLu7xEujnKajGkFfYtRvdLD3Arc1UC5/0nAALIQKBgQD68AuPtr4RiRCJf7R9\nXHrbmrQxl3+ybI4SuAyUXRp1HNxeuA7sULxnWh+ERtqhQ+opAfYyHknRjWbJ0C16\nI6tyUL8BVOd6p5+94npnHAkPmB3d6UI5FvIAecwCrW7orNpAqUO8pLFGQKcrXJel\n8aYHxwXofZQ4SLtECUq90vliXwKBgQDc/M9RB+YQu1MhZDG0vbfgogNjBFSfdG4d\n+2LVK5KXxk/qiC8msc4GS9UwpDdQPu6RTv+KaOmpyd+aKVmc/LCa3O7yIwZLR13r\nznpyPoCPDjEyEFmtCPxvKLnXqXjkNsvb9Fi1s89bKX8GEEuyr88ms0nYzEOdvIDL\nYK2yCW1KoQKBgQDt35FGGZgRbVnUzc8dqwX3mK5J+HAfhhIjon6iQaOr8sDftSDI\nWTxPyLnpnXTwvD2DxA1KszWMxLr0gjgp+Rgz1GFL9N09gxrFWKRpi8T3GF7vloel\nMKAVXV/MBfYF8J0wAIRqlcBKdU1CqJJEx055PuvV2P0hYajLNPe5+/1VhwKBgHaP\nqEbIHxXQ+svKbqSSuMlrArgoBaK7G604RxEpXG/TdOLWh72R3YAhRVLgd9C0wtfw\n80b1/I8cgLu7/ZktNS8Q453DTsgqlOhDkgwjHmQh8CD1BrfAP3b/+Z0MDpEaGQt8\nL+/kdZZqT/0X1xUaH+Cahj8rcAd7r/ntd6MyTZGhAoGBAJMlpLik4xvPfDn8rO7d\nN84EIavTMkzejGvk7A5F25XYJu8NxFzWxSy8vuscy/xP/E6NVIHeKdG/u53CofIs\nsLmgbZwVo5gIwCQeWO/5q7jTQnaXdqQs2LWg22DTFNl4w7Nxd/Riv+1zVMxEpzG6\nT3ITfQZkoFG5ZUhb2q9WYR1Y\n-----END PRIVATE KEY-----\n",
      client_email: "wizetable@wizeline-361313.iam.gserviceaccount.com",
    },
    sheetID: "17ZkeQqstKPJIzN1ycXEegl7iiF4nEsy4PNwqubIomjw"
  }
}

exports.STATIC = STATIC;
