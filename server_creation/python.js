module.exports = (userID, serverName, location) => {
    return {
        "name": serverName,
        "user": userID,
        "nest": 1,
        "egg": 58,
        "docker_image": "ghcr.io/luxxy-gf/python_3.10",
        "startup": "/start.sh",
        "limits": {
            "memory": 200,
            "swap": 0,
            "disk": 500,
            "io": 500,
            "cpu": 0
        },
        "environment": {
            "start_command1": "pip install -r requirements.txt",
            "start_command2": "python bot.py",
        },
        "feature_limits": {
            "databases": 0,
            "allocations": 1,
            "backups": 0
        },
        "deploy": {
            "locations": location,
            "dedicated_ip": false,
            "port_range": []
        },
        "start_on_completion": false,
        "oom_disabled": false
    }
}